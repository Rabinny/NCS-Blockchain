import { Component } from '@angular/core';

declare var $:any;

@Component({
    selector: 'oconotifications-cmp',
    moduleId: module.id,
    templateUrl: 'oconotifications.component.html'
})

export class OcoNotificationsComponent{
    showNotification(from, align){
        var type = ['','info','success','warning','danger'];

        var color = Math.floor((Math.random() * 4) + 1);

    	$.notify({
        	icon: "ti-gift",
        	message: "Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer."
        },{
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    }
}
