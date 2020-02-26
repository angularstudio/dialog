import { ComponentType }              from '@angular/cdk/overlay';
import { Injectable }                 from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogConfig }               from './dialog-config';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    private instances: Array<DialogConfig> = [];

    public constructor(private matDialog: MatDialog) {

    }

    public getInstance(id: string): DialogConfig {

        return this.instances[ id ];

    }

    public open<T>(componentRef: ComponentType<T>, dialogConfig: DialogConfig, data?: any) {

        console.log('DialogService.open()', dialogConfig);

        let _config: MatDialogConfig = new MatDialogConfig();

        _config.width = dialogConfig.width || '500px';
        _config.height = dialogConfig.height || '500px';
        _config.data = data;

        dialogConfig.dialogRef = this.matDialog.open(componentRef, _config);

        dialogConfig.dialogRef.afterClosed().subscribe(() => {

            delete this.instances[ dialogConfig.id ];

        });

        this.instances[ dialogConfig.id ] = dialogConfig;

    }

    public close(id: string): void {

        this.instances[ id ].dialogRef.close();

    }

    public onBackClick(id: string): void {

        if (this.instances[ id ].backLabel === 'Cancel') {

            this.close(id);

        }

    }

    public onNextClick(id: string): void {

    }

}
