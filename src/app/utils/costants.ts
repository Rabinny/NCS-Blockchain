import { Headers } from '@angular/http';



export class Constants {

    static recipientID; 
    static documentRegisterID;
    static assignmentID;
    static userEmail;
    static userId

    public static base_url = "https://dbrest-bamoraclecloudaccount01.gbcom-south-1.oraclecloud.com/";

     // get zone id
   /*  static ZONE_ID() {
        return localStorage.getItem('ZoneID').toString();
    } */

    static USER_ID(data) {
        return Constants.userId = data;
    }

    static USER_EMAIL(data) {
        return Constants.userEmail = data;
    }


    // Commands
    static GET_ALL_COMMANDS_API = Constants.base_url + "ords/pdb1/ncs/config/command/";
    static ADD_NEW_COMMAND = Constants.GET_ALL_COMMANDS_API;;

    // Zones
    static ZONES_API = Constants.base_url + "ords/pdb1/ncs/config/zones/";
    static SAVE_NEW_ZONE_INFORMATION = Constants.ZONES_API;


    // Roles
    static GET_ALL_ROLES = Constants.base_url + 'ords/pdb1/ncs/config/roles/';
    static SAVE_NEW_ROLE_INFORMATION = Constants.GET_ALL_ROLES;


    // Entry type
    static ENTRY_TYPE = Constants.base_url + "ords/pdb1/ncs/config/entrytype/";



    // Assignment Types
    static GET_ALL_ASSIGNMENT_TYPES = Constants.base_url + 'ords/pbd1/ncs/config/assignmenttype/'
    static SAVE_NEW_ASSIGNMENT_TYPES = Constants.GET_ALL_ASSIGNMENT_TYPES;



    // Reset Password
    static SAVE_NEW_PASSWORD_RESET_INFORMATION = Constants.base_url + 'ords/pbd1/ncs/system/passwordreset/';



    // Users
    static GET_ALL_USERS = Constants.base_url + 'ords/pdb1/ncs/system/users/';
    static GET_A_USER_BY_ID = Constants.GET_ALL_USERS;
    static GET_A_USER_BY_EMAIL = Constants.base_url + 'ords/pdb1/ncs/system/user/email/';
    static SAVE_NEW_USER_INFORMATION = Constants.GET_ALL_USERS;
    static CHANGE_USER_PASSWORD = Constants.base_url + 'ords/pbd1/ncs/system/user/changepassword/';
    static UPDATE_USER_INFORMATION = Constants.GET_ALL_USERS;
    static UPDATE_USER_INFORMATION_2 = Constants.base_url + 'ords/pbd1/ncs/system/user/update/';
    static VERIFY_AND_APPROVE_USER_ACCOUNT = Constants.base_url + 'ords/pbd1/ncs/system/user/verifyaccount/';
    static GET_USER_INFO_BY_ID = Constants.base_url + 'ords/pdb1/ncs/system/userinfo/';
    static SAVE_USER_INFO = Constants.base_url + 'ords/pdb1/ncs/system/userinfo/'; 


    // Role Access
    static SAVE_NEW_ROLE_ACCESS_INFO = Constants.base_url + 'ords/pdb1/ncs/system/roleaccess/';


    // Form 41
    static GET_ALL_FORM_41 = Constants.base_url + 'ords/pdb1/ncs/system/form41/';
    static GET_FORM_41_BY_USER = Constants.GET_ALL_FORM_41 + 'user/';
    static SAVE_NEW_FORM_41 = Constants.GET_ALL_FORM_41;
    static UPDATE_FORM_41 = Constants.GET_ALL_FORM_41;
    static UPDATE_FORM_41_STATUS = Constants.GET_ALL_FORM_41 + 'status/update/';
    static UPDATE_FORM_41_SITESTATUS = Constants.GET_ALL_FORM_41 + 'sitestatus/update/';
    static FORM_41_STATUS = Constants.base_url + 'ords/pdb1/ncs/config/form41status/';
    static SAVE_NEW_FORM_41_ATTACHMENT = Constants.base_url + 'ords/pdb1/ncs/system/form41attachment/';
    
    
/*
    // Messages & Messages Attachment
    static GET_ALL_MESSAGES = Constants.base_url + 'ords/pbd1/ncs/system/messages/';
  //  static GET_A_MESSAGE_BY_ID = Constants.GET_ALL_MESSAGES + Constants.GET_MESSAGE_ID();
    static SAVE_NEW_MESSAGE_INFORMATION = Constants.GET_ALL_MESSAGES;
    static GET_MESSAGE_ATTACHMENT_BY_SENDER = Constants.base_url + 'ords/pbd1/ncs/system/messagesbysender/' + Constants.USER_ID();
    static GET_MESSAGES_ATTACHMENT_BY_RECEPIENT = Constants.base_url + 'ords/pbd1/ncs/system/messagesbyrecipient/' + Constants.recipientID;
    static SAVE_NEW_MESSAGE_ATTACHMENT_INFORMATION = Constants.base_url + 'ords/pbd1/ncs/system/messagesattachment';


    // DocumentRegister and uploads
    static GET_ALL_DOCUMENT_REGISTERS = Constants.base_url + 'ords/pbd1/ncs/system/documentregister/';
    static GET_DOCUMENT_REGISTER_BY_ID = Constants.GET_ALL_DOCUMENT_REGISTERS + Constants.documentRegisterID;
    static GET_DOCUMENT_REGISTER_BY_USERID = Constants.base_url + 'ords/pbd1/ncs/system/documentregisteruploadbyuser/' + Constants.USER_ID();
    static SAVE_NEW_DOCUMENT_REGISTER = Constants.GET_ALL_DOCUMENT_REGISTERS;
    static SAVE_NEW_DOCUMENT_REGISTER_UPLOADS = Constants.base_url + 'ords/pbd1/ncs/system/documentregisteruploads/';
    static GET_DOCUMENT_REGISTER_UPLOADS_BY_ID = Constants.base_url + 'ords/pbd1/ncs/system/documentregisteruploads/' + Constants.documentRegisterID;


    // Assignment
    static GET_ALL_ASSIGNMENT = Constants.base_url + 'ords/pbd1/ncs/system/assignment/';
    static GET_ASSIGMENT_BY_ID = Constants.GET_ALL_ASSIGNMENT + Constants.assignmentID;
    static GET_ASSIGNMENT_BY_USERID = Constants.base_url + 'ords/pbd1/ncs/system/assignnmentbyuser/' + Constants.USER_ID();
  //  static GET_ASSIGNMENT_BY_FORMID = Constants.base_url + 'ords/pbd1/ncs/system/assignnmentbyform/' + Constants.FORM_ID();
    static SAVE_NEW_ASSIGNMENT = Constants.GET_ALL_ASSIGNMENT;
    static CHANGE_ASSIGNMENT_TYPE_FOR_AN_ASSIGNMENT_BY_ID = Constants.base_url + 'ords/pbd1/ncs/system/assignment/type/';
    static CHANGE_STATUS_FOR_AN_ASSIGNMENT = Constants.base_url + 'ords/pbd1/ncs/system/assignment/status/update/';
    static UPDATE_ASSIGNMENT = Constants.GET_ALL_ASSIGNMENT;
    static CHANGE_ASSIGNMENT_TYPE_BY_ASSIGNMENT_ID = Constants.base_url + 'ords/pbd1/ncs/system/assignment/type/';
    static GET_ASSIGNMENT_ACTIVITY_BY_ID = Constants.base_url + 'ords/pbd1/ncs/system/assignmentactivities/' + Constants.assignmentID;
    static SAVE_NEW_ASSIGNMENT_ACTIVITY =  Constants.base_url + 'ords/pbd1/ncs/system/assignmentactivities/';
    static GET_AN_ASSIGNMENT_OFFICIAL_BY_ID = Constants.base_url + 'ords/pbd1/ncs/system/assignmentofficial/' + Constants.assignmentID;
    static GET_ASSIGNMENT_OFFICIAL_BY_ASSIGNMENT = Constants.base_url + 'ords/pbd1/ncs/system/assignmentofficial/assignment/' + Constants.assignmentID;
    static SAVE_NEW_ASSIGNMENT_OFFICIAL = Constants.base_url + 'ords/pbd1/ncs/system/assignmentofficial/';
    


    // licence
    static GET_ALL_LICENCES = Constants.base_url + 'ords/pbd1/ncs/system/licence/';
  //  static GET_LICENCE_BY_ID = Constants.GET_ALL_LICENCES + Constants.GET_LICENCE_ID();
  //  static GET_LICENCE_BY_FORM_ID = Constants.GET_ALL_LICENCES + 'form/' + Constants.FORM_ID();
    static SAVE_NEW_LICENCE = Constants.GET_ALL_LICENCES;
    static UPDATE_LICENCE = Constants.GET_ALL_LICENCES;

    private static currentTime = new Date().getTime();
*/
    static getHeader() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');     
        return {headers: headers};
      }

    static getHeader2() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/form-data');
        return {headers: headers};
    }

    static checkUserStatus() {
        let isVerified = localStorage.getItem('isAccountVerified');
        isVerified.toString();
        console.log(isVerified);
        if( isVerified === '0') {
            console.log("The account is not verified");
            return true;
        } else {
            return false;
        }
    }
} 