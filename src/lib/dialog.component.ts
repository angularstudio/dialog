import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { DialogService }                                                                    from './dialog.service';

@Component({

    selector: 'dialogs',

    template: `

        <div class="dialog-wrapper">

            <div *ngIf="dialogService.getInstance(id).headerShow"
                 class="header"
                 [style.background]="dialogService.getInstance(id).headerBackgroundColor">

                <div class="title">{{ dialogService.getInstance(id).title }}</div>

                <div class="buttons">

                    <i class="far fa-times" (click)="dialogService.close(id)"></i>

                </div>

            </div>

            <div #content class="content" [style.background]="dialogService.getInstance(id).contentBackgroundColor">

                <ng-content></ng-content>

            </div>

            <div *ngIf="dialogService.getInstance(id).footerShow"
                 class="footer"
                 [style.background]="dialogService.getInstance(id).footerBackgroundColor">

                <div class="buttons-left">

                    <button *ngIf="dialogService.getInstance(id).backShow"
                            (click)="dialogService.onBackClick(id); backClick.emit(id)"
                            [style.background-color]="dialogService.getInstance(id).backBackgroundColor"
                            mat-raised-button>

                        {{ dialogService.getInstance(id).backLabel }}

                    </button>

                    <button *ngIf="dialogService.getInstance(id).deleteShow"
                            (click)="deleteClick.emit(id)"
                            [style.background-color]="dialogService.getInstance(id).deleteBackgroundColor"
                            mat-raised-button
                            class="delete">

                        {{ dialogService.getInstance(id).deleteLabel }}

                    </button>

                </div>

                <div class="message" [innerHTML]="dialogService.getInstance(id).footerMessage"></div>

                <div class="buttons-right">

                    <button *ngIf="dialogService.getInstance(id).nextShow && nextShow"
                            (click)="nextClick.emit(id)"
                            [disabled]="!dialogService.getInstance(id).nextEnabled && !nextEnabled"
                            [style.background-color]="dialogService.getInstance(id).nextBackgroundColor"
                            mat-raised-button>

                        {{ dialogService.getInstance(id).nextLabel }}

                    </button>

                </div>

            </div>

        </div>

    `,

    styleUrls: [ 'dialog.component.scss' ],

    encapsulation: ViewEncapsulation.None

})
export class DialogComponent {

    @ViewChild('content') private contentContainer: ElementRef;

    @Output() public nextClick = new EventEmitter();
    @Output() public backClick = new EventEmitter();
    @Output() public deleteClick = new EventEmitter();

    @Input() public id: string;
    @Input() public nextEnabled: boolean;
    @Input() public nextShow: boolean = true;

    @Input() public footerShow: boolean = true;

    @Input() public headerBackground: string = '#FEFFFE';
    @Input() public contentBackground: string = '#FEFFFE';
    @Input() public footerBackground: string = '#FEFFFE';

    public constructor(public dialogService: DialogService) {

        dialogService.scroll$.subscribe(top => this.scrollTo(top));

    }

    public scrollTo(top?: number): void {

        try {

            this.contentContainer.nativeElement.scrollTop = top || this.contentContainer.nativeElement.scrollHeight;

        } catch (err) {

        }

    }

}
