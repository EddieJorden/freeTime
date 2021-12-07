const Finances = ({ userHourlyWage, userWorkingHours, userMonthlyExpenses, history }) => {

    const monthlyIncome = (userHourlyWage * userWorkingHours) * 4
    const monthlyIncomeWithReturn = monthlyIncome + (monthlyIncome * .15)
    console.log('userHourlyWage = ', userHourlyWage)
    console.log('userWorkingHours = ', userWorkingHours)
    console.log('monthlyIncome = ', monthlyIncome)

    const taxPercent = () => {
        if (((userHourlyWage * userWorkingHours) * 4) * 12 >= 539900) {
            return .37
        }
        if (((userHourlyWage * userWorkingHours) * 4) * 12 >= 215950) {
            return .35
        }
        if (((userHourlyWage * userWorkingHours) * 4) * 12 >= 170050) {
            return .32
        }
        if (((userHourlyWage * userWorkingHours) * 4) * 12 >= 89075) {
            return .24
        }
        if (((userHourlyWage * userWorkingHours) * 4) * 12 >= 41775) {
            return .22
        }
        if (((userHourlyWage * userWorkingHours) * 4) * 12 >= 10275) {
            return .12
        }
        if (((userHourlyWage * userWorkingHours) * 4) * 12 < 10275) {
            return .10
        }
    }
    const monthlyWageAfterTaxes = ((userHourlyWage * userWorkingHours) * 4) - (((userHourlyWage * userWorkingHours) * 4) * taxPercent())
        console.log('monthlyWagesAfterTaxes', monthlyWageAfterTaxes)

    const monthlyOverUnder = () => {
        let overUnder = monthlyWageAfterTaxes - userMonthlyExpenses
            console.log('overUnder', overUnder)
        return overUnder
    }

    const timeTillRich = () => {
        let savings = 0
        let months = 0

        let reformatedTimeTillRich = () => {
            let yearsTillRich = Math.floor(months / 12)
            let leftOverMonthsTillRish = months % 12
            return `${yearsTillRich} years ${leftOverMonthsTillRish} months until you are rich`
        }

        if (monthlyOverUnder() > 0) {
            for (let i = 0; savings <+ 2000000; i++) {
                savings = savings + monthlyIncomeWithReturn
                months = i
            }
            return `${reformatedTimeTillRich()}`
        } if (monthlyWageAfterTaxes === 0) {
            return `please enter monthlyIncome`
        } if (monthlyWageAfterTaxes < 0) {
            return `better start making more or spending less`
        }
    }

    const onBackClick = () => {
        history('/FreeTime')
    }

    return (
        <div>
            <div >
                <table style={{
                    borderSpacing:"30px"
                }}>
                    <tbody >
                        <tr>
                            <td>
                                <div>monthly income:</div>
                                <div>{monthlyIncome}</div>
                            </td>
                            <td>
                                <div>monthly expenses: </div>
                                <div>{userMonthlyExpenses}</div>
                            </td>
                            <td>
                                <div>monthly profit: </div>
                                <div>{monthlyOverUnder()}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                {timeTillRich()}
            </div>
            <button
                onClick={onBackClick}
                style={{
                    width:"120px",
                    height:"40px",
                    fontWeight:"bold",
                    fontSize:"30px",
                    backgroundColor:"#e62a00",
                    color:"white",
                    borderRadius:"8px",
                    marginTop:"12px"
                }}
            >
                back
            </button>
        </div>
    )
}

export default Finances