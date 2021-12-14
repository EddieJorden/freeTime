const Form = ({
    setUserName,
    setUserWorkingHours,
    setUserHourlyWage,
    setUserMonthlyExpenses,
    history
}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('user name', event.target[0].value)
        setUserName(event.target[0].value)
        console.log('weekly working hours', event.target[1].value)
        setUserWorkingHours(event.target[1].value)
        console.log('hourly wage', event.target[2].value)
        setUserHourlyWage(event.target[2].value)
        console.log('monthly expenses', event.target[3].value)
        setUserMonthlyExpenses(event.target[3].value)
        history('/FreeTime')
    }

    return (
        <div>
            <div >
                <div style={{fontSize:"32px", fontWeight:"bold"}}>
                    how much free time do you have?
                </div>
                <p style={{marginBottom:"39px"}}>
                    please provide the following details
                </p>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                <form onSubmit={handleSubmit} title="please provide some basic info"
                    style={{width:"100%", height:"100%"}}>
                    <table style={{margin:"auto", textAlign:"right"}}>
                        <tbody>
                            <tr>
                                <td>
                                    <label>name:  </label>
                                </td>
                                <td>
                                    <input id="userName" type="text" required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>working hours:  </label>
                                </td>
                                <td>
                                    <input id="workingHours" type="text" required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>hourly wage:  </label>
                                </td>
                                <td>
                                    <input id="userHourlyWage" type="text" required/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>monthly expenses:  </label>
                                </td>
                                <td>
                                    <input id="monthlyExpenses" type="text" required/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input
                        type="submit"
                        title="submit"
                        style={{
                            backgroundColor:"#ffd000",
                            color:"white",
                            fontSize:"18px",
                            fontWeight:"bold",
                            width:"80px",
                            height:"30px",
                            borderRadius:"5px",
                            marginTop:"18px"
                        }}
                    />
                </form>
            </div>
        </div>
    )
}

export default Form;