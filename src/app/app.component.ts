import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    options: any;

    markerSize = 10;

    constructor() {
        this.updateOptions()
    }

    setMarkerSize(markerSize: number) {
        this.markerSize = markerSize;
        this.updateOptions();
    }

    updateOptions() {
        this.options = {
            data: [{
                month: 'Jan',
                revenue: 155000,
                profit: 33000
            }, {
                month: 'Feb',
                revenue: 123000,
                profit: 35500
            }, {
                month: 'Mar',
                revenue: 172500,
                profit: 41000
            }, {
                month: 'Apr',
                revenue: 185000,
                profit: 50000
            }],
            series: [{
                xKey: 'month',
                yKey: 'revenue',
                marker: {
                    size: this.markerSize
                }
            }]
        };
    }
}
