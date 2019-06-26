<template>
    <div class='row'>
      <div class='col-sm-10'>
        <div id='graph-container'
          style="height: 400px; padding: 10px" >
        </div>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
const sigma = require('sigma');
(window).sigma = sigma;
require('../../node_modules/sigma/build/plugins/sigma.renderers.edgeLabels.min.js');
require('../../node_modules/sigma/build/plugins/sigma.renderers.parallelEdges.min.js');
require('../../node_modules/sigma/build/plugins/sigma.layout.noverlap.min.js');
require('../../node_modules/sigma/build/plugins/sigma.plugins.animate.min.js');

export default {
  name: 'Graph',
  props: ['graph_data'],
  data() {
    return {
      testGraph: {
        nodes: [
          {
            id: 'n0',
            label: 'Post-sauna recovery',
            size: 3,
            x: 1,
            y: 2,
            color: '#000000',
          },
          {
            id: 'n1',
            label: 'N-back training',
            size: 2,
            x: 2,
            y: 3,
          },
          {
            id: 'n2',
            label: 'Auditory processing',
            size: 1,
            x: 3,
            y: 3,
          },
          {
            id: 'n3',
            label: 'Ripple oscillations',
            size: 3,
            x: 4,
            y: 3,
          },
          {
            id: 'n4',
            label: 'Endocannabinoid system',
            size: 2,
            x: 5,
            y: 7,
          },
          {
            id: 'n5',
            label: 'L-theanine',
            size: 1,
            x: 6,
            y: 5,
          },
          {
            id: 'n6',
            label: 'Physical exercise',
            size: 1,
            x: 7,
            y: 5,
          },
          {
            id: 'n7',
            label: 'Enhanced resting neural network relaxation',
            size: 3,
            x: 8,
            y: 3,
          },
          {
            id: 'n8',
            label: 'Working memory',
            size: 2,
            x: 9,
            y: 6,
          },
          {
            id: 'n9',
            label: 'Impaired verbal episodic memory encoding',
            size: 1,
            x: 10,
            y: 3,
          },
          {
            id: 'n10',
            label: 'Modulating memory consolidation',
            size: 3,
            x: 11,
            y: 4,
          },
          {
            id: 'n11',
            label: 'Cognition effects of caffeine',
            size: 2,
            x: 12,
            y: 7,
          },
          {
            id: 'n12',
            label: 'Information processing',
            size: 1,
            x: 9,
            y: 8,
          },
          {
            id: 'n13',
            label: 'Interrupted sleep',
            size: 1,
            x: 9,
            y: 9,
          },
          {
            id: 'n14',
            label: 'Attention',
            size: 1,
            x: 9,
            y: 9,
          },
        ],
        edges: [
          // {
          //   id: 'e0',
          //   source: 'n0',
          //   target: 'n7',
          //   label: 'led to',
          // },
          // {
          //   id: 'e1',
          //   source: 'n1',
          //   target: 'n8',
          //   label: 'enhances',
          // },
          // {
          //   id: 'e2',
          //   source: 'n2',
          //   target: 'n0',
          //   label: 'was not affected by',
          // },
          // {
          //   id: 'e3',
          //   source: 'n3',
          //   target: 'n9',
          //   label: 'are associated with',
          // },
          // {
          //   id: 'e4',
          //   source: 'n4',
          //   target: 'n10',
          //   label: 'is involved in',
          // },
          // {
          //   id: 'e5',
          //   source: 'n5',
          //   target: 'n11',
          //   label: 'appears to enhance',
          // },
          // {
          //   id: 'e6',
          //   source: 'n6',
          //   target: 'n12',
          //   label: 'enhances',
          // },
          // {
          //   id: 'e7',
          //   source: 'n13',
          //   target: 'n14',
          //   label: 'detrimental effect on',
          // },
          // {
          //   id: 'e8',
          //   source: 'n6',
          //   target: 'n14',
          //   label: 'enhances',
          // },
        ],
      },
    };
  },
  mounted() {
    const Sigma = sigma;
    const s = new Sigma({
      graph: this.$props.graph_data,
      // graph: this.testGraph,
      container: 'graph-container',
      settings: {
        defaultNodeColor: '#ec5148',
        drawEdgeLabels: true,
        labelThreshold: 1,
      },
    });
    var config = {
      nodeMargin: 9.0,
      scaleNodes: 1.3
    };

    // Configure the algorithm
    var listener = s.configNoverlap(config);

    // Bind all events:
    listener.bind('start stop interpolate', function(event) {
      console.log(event.type);
    });

    // Start the algorithm:
    s.startNoverlap();
  },
};
</script>
