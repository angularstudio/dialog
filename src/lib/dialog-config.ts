import { MatDialogRef } from '@angular/material/dialog';

export class DialogConfig {

    public dialogRef?: MatDialogRef<any>;
    public id: string;
    public title?: string;
    public titleIconClass?: string;

    public width?: string;
    public height?: string;

    public backBackgroundColor?: string = '#c0c0c0';
    public backLabel?: string = 'Cancel';
    public backShow?: boolean = true;

    public contentBackgroundColor?: string = '#fff';

    public deleteBackgroundColor?: string = 'red';
    public deleteLabel?: string = 'Delete';
    public deleteShow?: boolean;

    public footerShow?: boolean = true;
    public footerBackgroundColor?: string = '#eee';
    public footerMessage?: string = '';

    public headerShow?: boolean = true;
    public headerBackgroundColor?: string = '#eee';

    public nextBackgroundColor?: string = 'rebeccapurple';
    public nextFontColor?: string;
    public nextLabel?: string = 'Save';
    public nextShow?: boolean = true;
    public nextEnabled?: boolean = true;

    public constructor(o: DialogConfig) {

        Object.assign(this, o);

    }

}
