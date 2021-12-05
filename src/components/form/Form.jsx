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
            <div>
                <div>How much free time do you have?</div>
            </div>
            <form onSubmit={handleSubmit} title="name and working hours">
                <table>
                    <tr>
                        <td>
                            <label>name: </label>
                            <input id="userName" type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>working hours: </label>
                            <input id="workingHours" type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>hourly wage: </label>
                            <input id="userHourlyWage" type="text"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>monthly expenses: </label>
                            <input id="monthlyExpenses" type="text"/>
                        </td>
                    </tr>
                </table>
                <input type="submit" title="submit"/>
            </form>
        </div>
    )
}

export default Form;