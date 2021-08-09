import { Component } from '@angular/core';

@Component({
    selector: 'plotly-example',
    template: `
    <plotly-plot [data]="graph.data" [layout]="graph.layout"
       [useResizeHandler]="true" [style]="{position: 'relative', width: '100%', height: '100%'}">
    </plotly-plot>`,
})
export class PlotlyExampleComponent {
    public graph = {
        data: [{ y: [10, 0, -10, -10, 0, 10, 10, 0, -10, -8, 0, 10, 10, 0, -10, -10, 0, 10],
        x: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
        z: [ -5, -10, -5, 5, 10, 5, -5, -10, -5, 4, 2, 5, -5, -10, -5, 5, 10, 5], type: 'scatter3d' }],
        layout: {autosize: true, title: 'Radar 3D', scene: {xaxis: {autorange: 'reversed'}}},

    };
}






