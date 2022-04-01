export  interface todofealds {
   title: string;
   description: string;
   id?: number
    }
export interface todo_Begin extends todofealds { }
export interface todo_Doing extends todofealds { }
export interface todo_Done extends todofealds { }


export default interface todo {
         [one:string]:todo_Begin[];
         two:todo_Doing[];
         three:todo_Done[];
}
