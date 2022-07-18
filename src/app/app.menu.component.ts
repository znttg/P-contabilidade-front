import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>

            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            // {
            //     label: 'Home',
            //     items:[
            //         {label: 'Contabilidade',icon: 'pi pi-fw pi-home', routerLink: ['/']}
            //     ]
            // },
            // {
            //     label: 'UI Components',
            //     items: [
            //         {label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
            //         {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
            //         {label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel']},
            //         {label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
            //         {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
            //         {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
            //         {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
            //         {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
            //         {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
            //         {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
            //         {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
            //         {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], preventExact: true},
            //         {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
            //         {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
            //         {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
            //         {label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc']}
            //     ]
            // },
            // {
            //     label:'Prime Blocks',
            //     items:[
            //         {label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW'},
            //         {label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank'},
            //     ]
            // },
            // {label:'Utilities',
            //     items:[
            //         {label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/icons']},
            //         {label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank'},
            //     ]
            // },
            // {
            //     label: 'Pages',
            //     items: [
            //         {label: 'Crud', icon: 'pi pi-fw pi-user-edit', routerLink: ['/pages/crud']},
            //         {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']},
            //         {label: 'Landing', icon: 'pi pi-fw pi-globe', routerLink: ['pages/landing']},
            //         {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['pages/login']},
            //         {label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['pages/error']},
            //         {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['pages/notfound']},
            //         {label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['pages/access']},
            //         {label: 'Empty', icon: 'pi pi-fw pi-circle', routerLink: ['/pages/empty']}
            //     ]
            // },
            {
                items: [
                    {
                        label: 'Dashboard', icon: '', routerLink: ['/dashboard'],

                    },
                    {
                        label: 'Tabelas', icon: '',
                        items: [
                            {
                                label: 'Plano de contas', icon: '',
                                items: [
                                    {label: 'Consulta plano de contas', icon: ''},
                                    {label: 'Copia plano de contas', icon: ''},
                                ]
                            },
                            {
                                label: 'Histórico', icon: '',
                                items: [
                                    {label: 'Grupo histórico', icon: ''},
                                    {label: 'Histórico', icon: ''},
                                    {label: 'Subgrupo histórico', icon: ''},
                                    {label: 'Supra histórico', icon: ''},
                                ]
                            },
                            {
                                label: 'Conta contábil', icon: '', routerLink: ['/uikit/table'],
                            },
                        ]
                    },
                    {
                        label: 'Bloqueio', icon: '',
                        items: [
                            {label: 'Bloqueio contábil', icon: ''},
                            {label: 'Desbloqueio contábil', icon: ''},
                        ]
                    },
                    {
                        label: 'Lançamentos', icon: '',
                        items: [
                            {
                                label: 'Movimentação', icon: '',
                                items: [
                                    {label: 'Atualiza razão', icon: ''},
                                    {label: 'Consolida plano', icon: ''},
                                    {label: 'Consulta ficha de eliminação', icon: ''},
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Consultas', icon: '',
                        items: [
                            {
                                label: 'Consulta', icon: '',
                                items: [
                                    {label: 'Constulta razão', icon: ''},
                                ]
                            },
                            {
                                label: 'Relatório', icon: '',
                                items: [
                                    {label: 'Balancete', icon: ''},
                                    {label: 'Razão', icon: ''},
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Envio', icon: '',
                        items: [
                            {
                                label: 'Audit', icon: '',
                                items: [
                                    {label: 'TXT Balancete', icon: ''},

                                ]
                            },
                            {
                                label: 'Previc', icon: '',
                                items: [
                                    {label: 'XML Balancete', icon: ''},
                                    {label: 'Importação de lançamentos extracontábeis', icon: ''},
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Conformidade', icon: '',
                        items: [
                            {label: 'Consulta', icon: ''},
                            {label: 'Ciente', icon: ''},
                            {label: 'Conformidade', icon: ''},
                            {label: 'Libera conformidade', icon: ''},
                            {label: 'Retorna para GECON', icon: ''},

                        ]
                    },
                    {
                        label: 'Encerramento', icon: '',
                        items: [
                            {
                                label: 'Encerramento anual', icon: '',
                                items: [
                                    {label: 'Backup do saldo', icon: ''},
                                    {label: 'Gerar documentos', icon: ''},
                                    {
                                        label: 'Livro contábil', icon: '',
                                        items: [
                                            {label: 'Termo de abertura', icon: ''},
                                            {label: 'Diário de lançamentos', icon: ''},
                                            {label: 'Termo de exatidão', icon: ''},
                                            {label: 'Termo de encerramento', icon: ''},
                                        ],
                                    },
                                    {label: 'Encerramento do ano', icon: ''},
                                ]
                            },
                            {label: 'Encerramento mensal', icon: ''},
                        ]
                    },
                ]
            },

        ];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
