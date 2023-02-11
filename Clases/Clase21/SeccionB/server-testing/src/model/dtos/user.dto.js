class UserDto{
    constructor({nombre, apellido, dni}){
        this.fullname = `${nombre} ${apellido}`,
        this.dni = dni
    };
}

export const convertToDto = (users)=>{
    if(Array.isArray(users)){
        const newData = users.map(user=>new UserDto(user));
        return newData;
    } else {
        const newData = new UserDto(users);
        return newData;
    }
}