import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Customer, Representative } from '../../api/customer';
import { CustomerService } from '../../service/customerservice';
import { Product } from '../../api/product';
import { ProductService } from '../../service/productservice';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api'

@Component({
    templateUrl: './conta-contabil.component.html',
    providers: [MessageService, ConfirmationService],
    styleUrls: ['../../../assets/demo/badges.scss'],
    styles: [`
        :host ::ng-deep  .p-frozen-column {
            font-weight: bold;
        }

        :host ::ng-deep .p-datatable-frozen-tbody {
            font-weight: bold;
        }

        :host ::ng-deep .p-progressbar {
            height:.5rem;
        }
    `]
})
export class TableComponent implements OnInit {



    loading:boolean = true;

    @ViewChild('dt') table: Table;

    @ViewChild('filter') filter: ElementRef;

    constructor(private customerService: CustomerService, private productService: ProductService, private messageService: MessageService, private confirmService: ConfirmationService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        // this.customerService.getCustomersLarge().then(customers => {
        //     this.customers1 = customers;
        //     this.loading = false;

        //     // @ts-ignore
        //     this.customers1.forEach(customer => customer.date = new Date(customer.date));
        // });
        // this.customerService.getCustomersMedium().then(customers => this.customers2 = customers);
        // this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);
        // this.productService.getProductsWithOrdersSmall().then(data => this.products = data);

    //     this.statuses = [
    //         {label: 'Unqualified', value: 'unqualified'},
    //         {label: 'Qualified', value: 'qualified'},
    //         {label: 'New', value: 'new'},
    //         {label: 'Negotiation', value: 'negotiation'},
    //         {label: 'Renewal', value: 'renewal'},
    //         {label: 'Proposal', value: 'proposal'}
    //     ];
    }

    // onSort() {
    //     this.updateRowGroupMetaData();
    // }

    // updateRowGroupMetaData() {
    //     this.rowGroupMetadata = {};

    //     if (this.customers3) {
    //         for (let i = 0; i < this.customers3.length; i++) {
    //             const rowData = this.customers3[i];
    //             const representativeName = rowData.representative.name;

    //             if (i === 0) {
    //                 this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
    //             }
    //             else {
    //                 const previousRowData = this.customers3[i - 1];
    //                 const previousRowGroup = previousRowData.representative.name;
    //                 if (representativeName === previousRowGroup) {
    //                     this.rowGroupMetadata[representativeName].size++;
    //                 }
    //                 else {
    //                     this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
    //                 }
    //             }
    //         }
    //     }
    // }

    // expandAll() {
    //     if(!this.isExpanded){
    //       this.products.forEach(product => this.expandedRows[product.name] = true);

    //     } else {
    //       this.expandedRows={};
    //     }
    //     this.isExpanded = !this.isExpanded;
    // }

    // formatCurrency(value) {
    //     return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    // }

    // clear(table: Table) {
    //     table.clear();
    //     this.filter.nativeElement.value = '';
    // }
}
