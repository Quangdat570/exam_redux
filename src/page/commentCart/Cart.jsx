

 export const Cart = ({todo}) => {
    
    return (
        <div className="cart col-3 text-center mt-5">
            <div className="title-name"> { todo.name}</div>
            <div className="title-email"> { todo.email}</div>
            <div className="title-body"> { todo.body } </div>
            
        </div>
    );
};