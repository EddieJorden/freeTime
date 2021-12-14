import React from 'react'

const FreeTime = ({
    userName,
    userWorkingHours,
    userHourlyWage,
    userMonthlyExpenses,
    history
}) => {
    // time
    const hoursPerMonth = 24 * 31
    const hoursSleepingPerDay = 8
    const hoursEatingPerDay = 2
    const hoursNeededEachDay = hoursSleepingPerDay + hoursEatingPerDay
    const workingHoursPerMonth = userWorkingHours * 4
    
    // money
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
        if (((userHourlyWage * userWorkingHours) * 4) * 12 <= 0) {
            return 0
        }
    }
    const monthlyWage = (userHourlyWage * workingHoursPerMonth) - ((userHourlyWage * workingHoursPerMonth) * taxPercent())

    const myMonthlyCosts = {
        rent: 2995,
        corolla: 450,
        sportsCar: 450,
        autoInsurance: 500,
        eddieCreditCard: 1000,
        att: 75,
        pge: 225,
        utilitys: 100,
        youtube: 50,
        food: 1000,
        catFood: 150,
        prettyStuff: 120,
        gas: 300,
        vasilyPhone: 45
    }

    const myMonthlyExpenses = costs => Object.values(myMonthlyCosts).reduce((a, b) => a + b)
    console.log('my monthly expenses', myMonthlyExpenses())
    
    const makingEnough = () => {
        if (monthlyWage > userMonthlyExpenses) {
            return `Congratulations! you are making enough to pay your bills.`
        } else if (userMonthlyExpenses > monthlyWage) {
            return `You are fucked.`
        }
    }

    const yourFreeTime = () => {
        const hoursNotWorking = hoursPerMonth - workingHoursPerMonth
        return `You have ${hoursNotWorking} non working hours a month.`
    }

    const averageWorkingHours = () => {
        const averageWorkingHours = 160
        if (workingHoursPerMonth <= averageWorkingHours) {
            return `You are working less than average.`
        } else return `You are working more than average.`
    }

    const hoursNeededToPayBills = () => {
        if(userMonthlyExpenses <= monthlyWage) {
            return `You are making enough money.`
        } else return `You are not making enough.`
    }

    const percentageOfTimeWorking = () => {
        const timePercentWorking = Math.floor((workingHoursPerMonth / hoursPerMonth) * 100)
        return `Yo are spending ${timePercentWorking} percent of your time working.`
    }

    const timeNeededPerMonth = () => {
        const timeNeededPerMonth = (hoursNeededEachDay * 7) * 4
        const totalTimeNeededPerMonth = timeNeededPerMonth + workingHoursPerMonth
        const percentOfTime = Math.floor((totalTimeNeededPerMonth / hoursPerMonth) * 100)
        const naturesBalance = Math.floor(hoursPerMonth * .61803398875)
        let hoursComparedToBalance = null
        if (totalTimeNeededPerMonth < naturesBalance) {
            hoursComparedToBalance = `Congratulations you have more than 38.2 percent of your time free per month.`
        } else {
            hoursComparedToBalance = `You are working too much to be balanced,  you should have 38.2 percent of your time free.`}
        return `You have ${totalTimeNeededPerMonth} hours worth of obligations per month, including ${workingHoursPerMonth} working hours, ${hoursSleepingPerDay} hours a day of sleep, and ${hoursEatingPerDay} hours eating per day.  Out of a total of ${hoursPerMonth} hours per month, this is ${percentOfTime} percent of your time. Natures ideal balance is ${naturesBalance} work hours a month,  ${hoursComparedToBalance},`
    }

    const moneyNeededPerMonth = () => {
        const naturesBalance = Math.floor(userMonthlyExpenses * .61803398875)
        const neededIncomePerMonth = monthlyWage - userMonthlyExpenses
        const neededLivingCostPerMonth = Math.floor(monthlyWage * .61803398875)
        return `You only need to be making $${naturesBalance} more than your living expenses. 
        For your monthly expenses, and income, this means you are making $${neededIncomePerMonth} more than your living costs per month. Your living costs should be under $${neededLivingCostPerMonth} per month to save or invest 38.2 percent of your income.`
    }

    const freeTimePerMonth = () => {
        const totalFreeTimePerMonth = hoursPerMonth - (workingHoursPerMonth + (hoursNeededEachDay * 31))
        const freeTimePerWeek = totalFreeTimePerMonth / 4
        const freeTimePerDay = Math.floor((totalFreeTimePerMonth / 31))
        return `You have ${totalFreeTimePerMonth} hours free per month, ${freeTimePerWeek} hours free per week, ${freeTimePerDay} hours free per day.`
    }

    const onBackClick = () => {
        history('/Form')
    }

    const onFinancesClick = () => {
        history('/Finances')
    }

    return (
        <div>
            <div>Hello {userName}</div>
            <div>you spend {userWorkingHours} hours working each week</div>
            <div>
                {`You are making $${monthlyWage} per month after taxes.`}
            </div>
            <div>
                {`Your monthly expenses are $${userMonthlyExpenses}.`}
            </div>
            <div>
                {makingEnough()}
            </div>
            <div>
                {yourFreeTime()}
            </div>
            <div>
                {averageWorkingHours()}
            </div>
            <div>
                {hoursNeededToPayBills()}
            </div>
            <div>
                {percentageOfTimeWorking()}
            </div>
            <div>
                {timeNeededPerMonth()}
            </div>
            <div>
                {moneyNeededPerMonth()}
            </div>
            <div>
                {freeTimePerMonth()}
            </div>
            <div
                style={{
                    display:"inline-flex"
                }}
            >
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <button
                                    onClick={onBackClick}
                                    style={{
                                        width:"150px",
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
                            </td>
                            <td>
                                <button
                                    onClick={onFinancesClick}
                                    style={{
                                        width:"150px",
                                        height:"40px",
                                        fontWeight:"bold",
                                        fontSize:"30px",
                                        backgroundColor:"#e62a00",
                                        color:"white",
                                        borderRadius:"8px",
                                        marginTop:"12px"
                                    }}
                                >
                                    finances
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FreeTime