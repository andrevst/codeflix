export type categoryConstructorProps = {
    category_id?: string;
    name: string;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date;
}

export type categoryCreateCommand = {
    category_id?: string;
    name: string;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date;
}

export class category {
    category_id: string;
    name: string;
    description: string | null;
    is_active: boolean;
    created_at: Date;

    constructor(props:categoryConstructorProps){
        this.category_id = props.category_id;
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true;
        this.created_at = props.created_at ?? new Date();
    }

//factory method
    static create(props: categoryCreateCommand) : category {
        return new category(props);
    }

    changeName(name:string) : void{
        this.name = name;
    }

    changeDescription(description:string) : void {
        this.description = description
    }

    activate(){
        this.is_active = true
    }

    deactivate(){
        this.is_active = false
    }

    toJSON() {
        return{
            category_id: this.category_id,
            name: this.name,
            description: this.description,
            is_active: this.is_active,
            created_at: this.created_at
        }
    }

}