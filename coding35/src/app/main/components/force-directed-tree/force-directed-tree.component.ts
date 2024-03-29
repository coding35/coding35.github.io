import { Component, EventEmitter, Inject, OnInit } from '@angular/core';

import { ContentModel } from 'src/app/shared/models/content-model';
import { Node } from './models/node';
import { Link } from './models/link';
import * as d3 from 'd3';

const FORCES = {
  LINKS: 1 / 50,
  COLLISION: 1,
  CHARGE: -1
}

@Component({
  selector: 'app-force-directed-tree',
  templateUrl: './force-directed-tree.component.html',
  styleUrls: ['./force-directed-tree.component.scss']
})
export class ForceDirectedTreeComponent{

  public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
  public simulation!: d3.Simulation<any, any>;

  private nodes: Node[] = [];
  private links: Link[] = [];

  constructor(@Inject('isFactory') nodes: Node[], @Inject('isFactory') links: Link[], @Inject('isFactory') options: { width: any, height: any }) {
    this.nodes = nodes;
    this.links = links;

    this.initSimulation(options);
  }

  connectNodes(source: number , target: number) {
    let link;

    if (!this.nodes[source] || !this.nodes[target]) {
      throw new Error('One of the nodes does not exist');
    }

    link = new Link(source, target);
    this.simulation.stop();
    this.links.push(link);
    this.simulation.alphaTarget(0.3).restart();

    this.initLinks();
  }

  initNodes() {
    if (!this.simulation) {
      throw new Error('simulation was not initialized yet');
    }

    this.simulation.nodes(this.nodes);
  }

  initLinks() {
    if (!this.simulation) {
      throw new Error('simulation was not initialized yet');
    }

/*     this.simulation.force('links',
      d3.forceLink(this.links)
        .id(d => d['id'])
        .strength(FORCES.LINKS)
    ); */
  }

  initSimulation(options: { width: any; height: any; }) {
/*     if (!options || !options.width || !options.height) {
      throw new Error('missing options when initializing simulation');
    }


    if (!this.simulation) {
      const ticker = this.ticker;

      this.simulation = d3.forceSimulation()
        .force('charge',
          d3.forceManyBody()
            .strength(d => FORCES.CHARGE * d['r'])
        )
        .force('collide',
          d3.forceCollide()
            .strength(FORCES.COLLISION)
            .radius(d => d['r'] + 5).iterations(2)
        );

      // Connecting the d3 ticker to an angular event emitter
      this.simulation.on('tick', function () {
        ticker.emit(this);
      });

      this.initNodes();
      this.initLinks();
    }


    this.simulation.force('centers', d3.forceCenter(options.width / 2, options.height / 2));


    this.simulation.restart();
  } */
}
}