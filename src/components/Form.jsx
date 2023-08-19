import "./Form.css"

function UserForm({isSignUp}) {
    const additionFileds = isSignUp ? (
        <>
            <input type="text" placeholder="Mobile Number or Email"/>
            <input type="text" placeholder="Full NAme"/>
        </>
    ):null; 

    return (
        <div className="userForm">
            <input type="text" placeholder="Phone number , username, or email" />
            <input type="text" placeholder="Password" />
            {additionFileds}
        </div>
    )
}

export default UserForm;