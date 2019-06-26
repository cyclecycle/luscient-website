<template>
  <v-app light>
  <title>Artifact API | biomedical fact extraction</title>
  <v-toolbar class="white">
      <v-toolbar-title><a href='/' style="text-decoration: none; color: #000000;">luscient</a></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
    <v-btn
        flat
        @click="$vuetify.goTo('#usage')"
      >
        Usage
        <!-- <v-icon right>launch</v-icon> -->
    </v-btn>
    <v-btn
        flat
        @click="$vuetify.goTo('#contact')"
      >
        Contact
        <!-- <v-icon right>launch</v-icon> -->
    </v-btn>
      <v-btn
        flat
        href="/"
      >
        Home
        <!-- <v-icon right>launch</v-icon> -->
    </v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>

      <v-container fluid>
      <section>
        <v-slide-y-transition mode="out-in">
          <v-layout align-start align-left column>
            <v-flex>
              <logo></logo>
              <p class="display-4">Artifact</p>
            </v-flex>
            <v-flex>
              <p class="display-1">Mechanistic Information Extraction API</p>
              <!-- <p class="display-1">Fact Extraction API</p> -->
            </v-flex>
            <v-flex>
              <p class="subheading">Version 0.0.1</p>
            </v-flex>
            <v-flex mt-4>
              <p class="headline">Demo</p>
            </v-flex>
          </v-layout>
        </v-slide-y-transition>
          <v-layout col>
              <v-btn v-on:click="loadExample1">Example 1</v-btn>
              <v-btn v-on:click="loadExample2">Example 2</v-btn>
              <v-btn v-on:click="loadExample3">Example 3</v-btn>
              <v-btn v-on:click="loadExample4">Example 4</v-btn>
              <v-btn v-on:click="loadExample5">Example 5</v-btn>
          </v-layout>
            <v-layout align-start justify-start row fill-height mt-2>
              <v-flex xs12 sm12 md10>
                <v-textarea
                  box
                  label="Input text"
                  v-model="input"
                  counter
                ></v-textarea>
              </v-flex>
            </v-layout>
<!--             <v-layout>
              <v-flex xs2 md2>
                <v-switch
                  label="PubMed"
                  v-model="isPubmed">
                </v-switch>
              </v-flex>
              <v-flex xs3 md1>
                <v-text-field
                  label="PMID"
                  v-model="pmid"
                ></v-text-field>
              </v-flex>
            </v-layout> -->
<!--             <v-layout row fill-height>
            </v-layout> -->
            <v-layout>
                <v-btn
                  v-on:click="postData"
                  class="btn btn-success"
                  style="margin-top: 12px"
                  >
                  Go
                </v-btn>
                <div
                  v-if="loading"
                  id="loading"
                  style="margin-left: 20px; margin-top: 18px;">
                  <img src="../assets/ajax-loader.gif">
                </div>
            </v-layout>
      </section>

      <section>
            <v-layout v-if='error'>
               <v-alert
                :value="true"
                type="error"
                v-text="error"
              >
              </v-alert>
            </v-layout>
            <!-- <v-tabs>
            <v-tab key='display'>
              Display
            </v-tab>
            <v-tab-item> -->
            <v-layout xs6 md6 mt-3 mb-5>
<!--               <div style="width: 80%">
                <graph v-bind:graph_data="graph_data" v-if="graph_data && error === null"></graph>
              </div> -->
            </v-layout>
            <!-- <v-layout align-left justify-left v-if="preprocessed_text">
                <v-flex>
                  <p
                    class="headline text-md-left">
                      Preprocessed text
                  </p>
                </v-flex>
            </v-layout>
            <v-layout mb-4>
                <v-flex>
                  <p v-text="preprocessed_text" class="text-md-left"></p>
                </v-flex>
            </v-layout> -->
            <div v-if="entity_phrase_relationships" mt-5 id="epr">
              <v-layout align-left justify-left>
                <v-flex>
                  <p
                    class="headline text-md-left">
                      Entity phrase relationships
                  </p>
                </v-flex>
              </v-layout>
              <v-layout align-left justify-left>
                <v-flex>
                  <p class="body-1 text-md-left">Syntactic open domain relation extraction.</p>
                </v-flex>
              </v-layout>
              <v-layout mt-3>
                <v-data-table
                  :headers="epr_headers"
                  :items="entity_phrase_relationships"
                  v-if="entity_phrase_relationships"
                  class="elevation-1"
                  hide-actions
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-right">{{ props.item.subj.text }}</td>
                    <td class="text-xs-right">{{ props.item.pred.text }}</td>
                    <td class="text-xs-right">{{ props.item.obj.text }}</td>
                    <td class="text-xs-center">
                      <div v-if="props.item.is_directional">Y</div>
                      <div v-else>N</div>
                    </td>
                    <td class="text-xs-right">{{ props.item.voice | titlecase }}</td>
                  </template>
                </v-data-table>
              </v-layout>
              <v-layout mt-5>
                <p
                  class="headline"
                  v-if="func_rels_phrase_level">
                    Functional relationships
                </p>
              </v-layout>
              <v-layout mt-2>
                <p
                  class="title"
                  v-if="func_rels_phrase_level">
                    Phrase level
                </p>
              </v-layout>
              <v-layout align-left justify-left>
                <v-flex>
                  <p class="body-1 text-md-left">
                    Consider valence terms acting on
                    components of the entity phrase relationships, in
                  combination with the 'voice' of the sentence, to
                  generate a linked pair of 'drive' changes.</p>
                </v-flex>
              </v-layout>
              <v-layout mt-3>
                <v-data-table
                  :headers="directional_assertion_headers"
                  :items="func_rels_phrase_level"
                  v-if="func_rels_phrase_level"
                  class="elevation-1"
                  hide-actions
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-right">
                      <v-layout>
                      <div v-if="props.item.antecedent.valence == 'UP'">
                        <v-icon small class="pr-2">fa-arrow-up</v-icon>
                      </div>
                      <div v-else>
                        <v-icon small class="pr-2">fa-arrow-down</v-icon>
                      </div>
                       {{ props.item.antecedent.text }}
                      </v-layout>
                    </td>
                    <td>
                      <v-icon small class="pr-2">&rarr;</v-icon>
                    </td>
                    <td class="text-xs-right">
                      <v-layout>
                      <div v-if="props.item.consequent.valence == 'UP'">
                        <v-icon small class="pr-2">fa-arrow-up</v-icon>
                      </div>
                      <div v-else>
                        <v-icon small class="pr-2">fa-arrow-down</v-icon>
                      </div>
                       {{ props.item.consequent.text }}
                      </v-layout>
                    </td>
                  </template>
                </v-data-table>
              </v-layout>
              <v-layout mt-5>
                <p
                  class="title"
                  v-if="func_rels_entity_level">
                    Entity level
                </p>
              </v-layout>
              <v-layout>
                <v-flex>
                  <p class="body-1 text-md-left">
                Consider valence terms acting on named biological concepts
                 recognised within the above relationships to create
                 more granular entity level assertions.
                  </p>
                </v-flex>
              </v-layout>
              <v-layout mt-3>
                <v-data-table
                  :headers="directional_assertion_headers"
                  :items="func_rels_entity_level"
                  v-if="func_rels_entity_level"
                  class="elevation-1"
                  hide-actions
                >
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-right">
                      <v-layout>
                      <div v-if="props.item.antecedent.valence == 'UP'">
                        <v-icon small class="pr-2">fa-arrow-up</v-icon>
                      </div>
                      <div v-else>
                        <v-icon small class="pr-2">fa-arrow-down</v-icon>
                      </div>
                       {{ props.item.antecedent.text }}
                      </v-layout>
                    </td>
                    <td>
                      <v-icon small class="pr-2">&rarr;</v-icon>
                    </td>
                    <td class="text-xs-right">
                      <v-layout>
                      <div v-if="props.item.consequent.valence == 'UP'">
                        <v-icon small class="pr-2">fa-arrow-up</v-icon>
                      </div>
                      <div v-else>
                        <v-icon small class="pr-2">fa-arrow-down</v-icon>
                      </div>
                       {{ props.item.consequent.text }}
                      </v-layout>
                    </td>
                  </template>
                </v-data-table>
              </v-layout>
            </div>
          </section>

          <section>
          <v-layout align-left justify-left mt-5 id='usage'>
                <p class="headline">Programmatic usage</p>
            </v-layout>
            <v-layout align-left justify-left>
              </v-layout>
              <v-layout align-left justify-left mt-4>
                <p class="text-md-left">
                  <ul align-left justify-left left>
                    <li>
                        <b>Request:</b>
                        <ul>
                          <li>URL: http://www.luscient.io/api</li>
                          <li>Type: POST</li>
                          <li>Parameters:
                            <ul>
                              <li>
                                'text':
                                <ul>
                                  <li>Description: The text to be processed and from which relationships will be extracted.</li>
                                  <li>Type: String</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                    </li>
                    <li>
                      <b>Response:</b>
                      <ul>
                        <li>Format: JSON</li>
                      </ul>
                    </li>
                    <li>
                      <b>Limits:</b>
                      <ul>
                        <li>Rate: 50 requests per day.</li>
                        <li>Max length for 'text': 800 characters.</li>
                        <li>For heavier usage, please <a @click="$vuetify.goTo('#contact')">contact us</a>.</li>
                      </ul>
                    </li>
                  </ul>
                </p>
            </v-layout>
          </section>

          <section>
          <v-layout mt-5>
            <p
              class="headline">
                Contact
            </p>
          </v-layout>
          <v-layout mt-2 id='contact'>
            <p
              class="title">
                <v-list class="transparent layout justify-center">
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon style="color: #00bc80" class="text--lighten-3">email</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    luscient.tech@gmail.com
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            </p>
          </v-layout>
      </section>
    </v-container>
    </v-content>
</v-app>
</template>


<script>
import axios from 'axios';
import Graph from './Graph';
import Logo from './Logo';

export default {
  name: 'Artifact',
  data() {
    return {
      // eslint-disable-next-line
      // input: 'We found that bovine kidney contains an appreciable amount of AadAT activity, but lacks KAT activity.',
      // eslint-disable-next-line
      example_input_1: 'The levels of Akt1 (Ser473) were decreased with the treatment of Sotrastaurin, an inhibitor of PKC, suggesting that Akt1 may be one of the downstream targets of PKC.',
      example_input_2: 'B. fragilis toxin (BFT) does not exhibit cell lytic activity, but rather promotes cell proliferation. BFT increases barrier permeability with active secretion of chloride ions, actions known to promote diarrhea as well as colon inflammation and carcinogenesis. BFT induces the antiapoptotic protein cIAP2 and the polyamine catalyst spermine oxidase (SMO), which triggers ROS production, DNA damage, and cell proliferation. BFT also induces rapid DNA damage in colon epithelial cells in vivo, as detected by activation of H2A histone family, member X, an initiator of DNA repair.',
      example_input_3: 'Spermine oxidase (SMO) is rapidly induced by the bacterial pathogen Helicobacter pylori. Our results confirm that SMO contributes to chronic inflammation and tumor formation in a model of inflammation-associated colorectal cancer.',
      example_input_4: 'There is direct evidence that the induction of spermine oxidase during neoplastic transformation leads to the development of cancer.',
      exmample_input_5: 'Similarly, B. fragilis can secrete endotoxins that cause DNA damage leading to mutations and colon cancer initiation.',
      input: '',
      isPubmed: true,
      pmid: '29774951',
      loading: null,
      entity_phrase_relationships: null,
      func_rels_phrase_level: null,
      func_rels_ent_level: null,
      preprocessed_text: null,
      table: null,
      graph_data: null,
      error: null,
      active_tab: null,
      epr_headers: [
        { text: 'Entity Phrase', align: 'left', value: 'subject' },
        { text: 'Relation', value: 'predicate' },
        { text: 'Entity Phrase', value: 'object' },
        { text: 'Has valence', value: 'is_directional' },
        { text: 'Voice', value: 'voice' },
        // { text: 'Named entities', value: 'named_ents_both_sides' },
      ],
      directional_assertion_headers: [
        { text: 'Antecedent', align: 'left', value: 'ant' },
        { text: '' },
        { text: 'Consequent', value: 'sub' },
      ],
    };
  },
  mounted() {
    this.loadExample1();
  },
  filters: {
    titlecase: function(s) {
      return s[0].toUpperCase() + s.slice(1, s.length)
    }
  },
  methods: {
    loadExample1() {
      this.input = this.example_input_1;
    },
    loadExample2() {
      this.input = this.example_input_2;
    },
    loadExample3() {
      this.input = this.example_input_3;
    },
    loadExample4() {
      this.input = this.example_input_4;
    },
    loadExample5() {
      this.input = this.example_input_5;
    },
    postData() {
      this.loading = true;
      const payload = {
        text: this.input,
        named_entities: true,
        pmid: this.pmid,
        detect_valence: true,
        func_rels: true,
        sigma_graph: true,
        resolve_corefs: false,
        resolve_acros: true,
      };
      // eslint-disable-next-line
      // const path = 'http://localhost:5000/api';
      const path = 'https://shrouded-cove-62384.herokuapp.com/api';
      axios.post(path, payload)
        .then((res) => {
          // eslint-disable-next-line
          console.log(res);
          if (res.data.error !== undefined) {
            this.error = res.data.error;
          } else {
            this.table = res.data.table;
            this.entity_phrase_relationships = res.data.entity_phrase_relationships;
            this.graph_data = res.data.graph_data;
            this.func_rels_phrase_level = res.data.functional_relationships.phrase_level;
            this.func_rels_entity_level = res.data.functional_relationships.entity_level;
            this.preprocessed_text = res.data.preprocessed_text;
            // eslint-disable-next-line
            console.log(this.func_rels)
          }
          this.loading = false;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          this.loading = false;
        });
    },
  },
  components: {
    graph: Graph,
    logo: Logo,
  },
};
</script>
