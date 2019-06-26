<template>
<v-app light>
  <title>Luscient | Knowledge Engineering in Biomedical Science</title>
    <v-toolbar class="white">
      <v-toolbar-title><a href='/' style="text-decoration: none; color: #000000;">luscient</a></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
          flat
          @click="$vuetify.goTo('#contact')"
        >
          Contact
          <!-- <v-icon right>launch</v-icon> -->
      </v-btn>
      <v-btn
        flat
        @click="$vuetify.goTo('#blog')"
      >Blog</v-btn>
      <v-btn
        flat
        href="/artifact"
      >
        API
        <v-icon right>launch</v-icon>
    </v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <section>
        <!-- <v-parallax id="hero" style="background-attachment: fixed;" height="600"> -->
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
            mt-5
            mb-5
            pb-5
            pt-5
          >
            <img src="../assets/logo3.png" height="110" class="mb-5 mt-5">
            <!-- <h1 class="white--text mb-2 display-1 text-xs-center">Ask deeper questions.</h1> -->
            <h1 class="black--text mb-2 display-1 text-xs-center">Ask deeper questions.</h1>

            <div class="black--text subheading mb-3 text-xs-center">Enable intelligent query and inference of biomedical information.</div>
          </v-layout>
        <!-- </v-parallax> -->
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout col justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Why we exist</div>
                </v-card-title>
                <v-card-text>
                  To explore practical approaches for extracting computable information from scientific text, and deploying it to boost visbility and insight.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-container grid-list-xl>
          <!-- <div class="headline">Publications</div> -->
          <v-layout col justify-center class="my-5">
            <v-flex xs12 sm4>
              
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline" id="blog">Publications</div>
                </v-card-title>
                <v-card-text>
                  <v-card
                    class="my-3"
                    hover
                    href="https://blog.grakn.ai/biomedical-fact-extraction-and-reasoning-knowledge-graphs-from-scientific-text-c5b94f5f5dc9"
                  >
                    <v-card-media
                      class="white--text"
                      height="170px"
                      :src="graknImageSrc"
                    >
                      <v-container fill-height fluid>
                        <v-layout>
                          <v-flex xs12 align-end d-flex>
                            <span class="headline"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-media>
                    <v-card-text>
                      Enable Intelligent Query with Biological NLP and Knowledge Graphs
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        flat class="blue--text"
                        href="https://blog.grakn.ai/biomedical-fact-extraction-and-reasoning-knowledge-graphs-from-scientific-text-c5b94f5f5dc9"
                      >Read article</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>


      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">One big puzzle.</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">fas fa-exchange-alt</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">One thing leads to another</div>
                    </v-card-title>
                    <v-card-text>
                      We want to ask a system: "what causes X?", "what are the consequences of Y", "how are X and Y related?". For this we need to move beyond keyword-based recall, and <b>build systems which 'understand' the relationships between biological concepts.</b>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <!-- <v-icon x-large class="blue--text text--lighten-2">fas fa-code-branch</v-icon> -->
                      <v-icon x-large class="blue--text text--lighten-2">fas fa-project-diagram</v-icon>

                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Tame the network</div>
                    </v-card-title>
                    <v-card-text>
                      Behind the veil of direct associations between concepts in the scientific literature, there is an exponentially larger network of emergent relationships. How can we use technology to help us <b>manage and exploit complexity</b> in the biological information space?
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">far fa-circle</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Unify</div>
                    </v-card-title>
                    <v-card-text>
                      We want to build holistic and faithful compute-ready respresentations of the 'knowns' in biomedical science, to <b>increase the speed and comprehensibility with which we can answer questions</b>, and shift the emphasis towards asking them.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>


      <section>
        <v-container grid-list-xl>
          <v-layout col justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Try the Artifact API</div>
                </v-card-title>
                <v-card-text>
                  Extract mechanistic relationships from biomedical text.
                </v-card-text>
                  <!-- class="green lighten-2 mt-5" -->
                <v-btn
                  dark
                  large
                  href="/artifact"
                  style="background-color: #00bc80"
                >
                  API
                  <v-icon right>launch</v-icon>
              </v-btn>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>


      <section>
        <v-container grid-list-xl>
          <v-layout col justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline" id="contact">Contact us</div>
                </v-card-title>
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
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Contributors</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div>Tim Daly</div>
                    </v-card-title>
                    <v-card-text>
                        <!-- height="120" -->
                      <img
                        src="../assets/tim.jpg"
                        width="120"
                        aspect-ratio="4"
                        class="img-circle"
                      />
                        <!-- aspect-ratio="1" -->
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="text-xs-center">Beni Bienz</div>
                    </v-card-title>
                    <v-card-text>
                        <!-- color="grey lighten-4" -->
         <!--              <v-avatar
                        :size="200"
                      >
                        <img src="../assets/beni.jpg">
                      </v-avatar> -->
                      <img
                        src="../assets/beni.jpg"
                        width="120"
                        aspect-ratio="4"
                        class="img-circle"
                      />
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="text-xs-center">Nick Morley</div>
                    </v-card-title>
                    <v-card-text>
                      <v-avatar
                        :size="120"
                      >
                      <img src="../assets/nick.jpg">
                      </v-avatar>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <v-footer class="grey lighten-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
</v-app>
</template>

<script>
  export default {
    name: 'Landing',
    data() {
      return {
        graknImageSrc: require('../assets/grakn_article_image.png')
      }
    }
  }
</script>

<style>
#landing {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #ffffff;*/
}

#hero1 {/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#6fa5e3+0,8ec1ea+50,81baeb+51,bbdbf3+100 */
background: #6fa5e3; /* Old browsers */
background: -moz-linear-gradient(-45deg, #6fa5e3 0%, #8ec1ea 50%, #81baeb 51%, #bbdbf3 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #6fa5e3 0%,#8ec1ea 50%,#81baeb 51%,#bbdbf3 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #6fa5e3 0%,#8ec1ea 50%,#81baeb 51%,#bbdbf3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6fa5e3', endColorstr='#bbdbf3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

#hero {
background: #2999cd; /* Old browsers */
background: -moz-linear-gradient(-45deg, #2999cd 0%, #53bedf 50%, #3eb7e0 50%, #96d9ec 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #2999cd 0%,#53bedf 50%,#3eb7e0 50%,#96d9ec 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #2999cd 0%,#53bedf 50%,#3eb7e0 50%,#96d9ec 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2999cd', endColorstr='#96d9ec',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
/*filter: brightness(1);*/
}

#hero1 {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#30a1d6+0,5dc2e1+50,4abce2+51,9ddced+100 */
background: #30a1d6; /* Old browsers */
background: -moz-linear-gradient(-45deg, #30a1d6 0%, #5dc2e1 50%, #4abce2 51%, #9ddced 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #30a1d6 0%,#5dc2e1 50%,#4abce2 51%,#9ddced 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #30a1d6 0%,#5dc2e1 50%,#4abce2 51%,#9ddced 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#30a1d6', endColorstr='#9ddced',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

#hero1 {
/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#02a2b1+0,2989d8+50,207cca+51,4dbbc5+100 */
background: #02a2b1; /* Old browsers */
background: -moz-linear-gradient(-45deg, #02a2b1 0%, #2989d8 50%, #207cca 51%, #4dbbc5 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #02a2b1 0%,#2989d8 50%,#207cca 51%,#4dbbc5 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #02a2b1 0%,#2989d8 50%,#207cca 51%,#4dbbc5 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#02a2b1', endColorstr='#4dbbc5',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.img-circle {
    border-radius: 50%;
    object-fit: cover;
    width:120px;
    height:120px;
}

</style>