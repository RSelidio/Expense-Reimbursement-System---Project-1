export class Reimbursement{
    rb_id: number= 0;
    user_id: number= 0;
    rb_date: string= '';
    rb_amount: number= 0;
    rb_status: boolean= false;
    rb_removed: boolean= false;
  }

  export class Reimbursement2{
    rb_id: number= 0;
    user_id: number= 0;
    rb_date: string= '';
    rb_amount: number= 0;
    rb_status: boolean= false;
    rb_removed: boolean= false;
    username: string= '';
    rb_image: string='';
  }
  
  export class ReimbursementNotif{
    rb_id: number= 0;
    user_id: number= 0;
    rb_date: string= '';
    rb_amount: number= 0;
    rb_status: boolean= false;
    rb_removed: boolean= false;
    username: string= '';
    rb_desc: string= '';
    rb_image: string='';
  }

  
  export class UserInfo{
    user_id: number= 0;
    username: string= '';
    user_password: string= '';
    user_fname: string= '';
    user_lname: string= '';
    user_address: string= '';
    user_contact: number= 0;
    user_type: string= '';
    user_removed: boolean= false;
  }