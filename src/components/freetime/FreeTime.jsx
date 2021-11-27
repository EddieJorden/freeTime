import React from 'react'

const FreeTime = () => {
    // time
    const hoursPerDay = 24
    const hoursPerWeek = hoursPerDay * 7
    const hoursPerMonth = 24 * 31
    const hoursSleepingPerDay = 8
    const hoursEatingPerDay = 2
    const hoursNeededEachDay = hoursSleepingPerDay + hoursEatingPerDay

    // working
    const hourlyWage = 70
    const workingHoursPerWeek = 72
    const workingHoursPerMonth = workingHoursPerWeek * 4

    // money
    const monthlyWage = hourlyWage * workingHoursPerMonth
    const monthlyExpenses = 4500

    const makingEnough = () => {
        if (monthlyWage > monthlyExpenses) {
            return `congratulations you are in the clear`
        } else if (monthlyExpenses > monthlyWage) {
            return `you are fucked`
        }
    }

    const yourFreeTime = () => {
        const hoursNotWorking = hoursPerMonth - workingHoursPerMonth
        return `you have ${hoursNotWorking} free hours a month`
    }

    const averageWorkingHours = () => {
        const averageWorkingHours = 40
        if (workingHoursPerMonth < averageWorkingHours) {
            return `you are working less than average`
        } else return `you are working more than average`
    }

    const hoursNeededToPayBills = () => {
        if(monthlyExpenses <= monthlyWage) {
            return `you are making enough`
        } else return `you are not making enough`
    }

    const percentageOfTimeWorking = () => {
        const timePercentWorking = Math.floor((workingHoursPerMonth / hoursPerMonth) * 100)
        return `you are spending ${timePercentWorking} percent of your time working`
    }

    const timeNeededPerMonth = () => {
        const timeNeededPerMonth = (hoursNeededEachDay * 7) * 4
        const totalTimeNeededPerMonth = timeNeededPerMonth + workingHoursPerMonth
        const percentOfTime = Math.floor((totalTimeNeededPerMonth / hoursPerMonth) * 100)
        const naturesBalance = Math.floor(hoursPerMonth * .61803398875)
        const naturesBalanceOverUnder = hoursPerMonth - naturesBalance
        let hoursComparedToBalance = null
        if (totalTimeNeededPerMonth < naturesBalance) {
            hoursComparedToBalance = `congratulations you are under natures balance`
        } else {
            hoursComparedToBalance = `you are working more than natures balance`}
        return `you have ${totalTimeNeededPerMonth} out of ${hoursPerMonth} hours worth of obligations per month, this is ${percentOfTime} percent of your time, natures ideal balance is ${naturesBalance} hours a month,  ${hoursComparedToBalance},`
    }

    const moneyNeededPerMonth = () => {
        const naturesBalance = Math.floor(monthlyExpenses * .61803398875)
        const neededIncomePerMonth = monthlyWage - monthlyExpenses
        const neededLivingCostPerMonth = Math.floor(monthlyWage * .61803398875)
        return `you only need to be making ${naturesBalance} more than your living expenses. 
        For your monthly expenses, and income, this means you should be making ${neededIncomePerMonth} more than your living costs per month or your living costs should be ${neededLivingCostPerMonth} for your income`
    }

    return (
        <div>
            how much free time do you have?
            <div>
                {`you are making ${monthlyWage} per month`}
            </div>
            <div>
                {`your monthly expenses are ${monthlyExpenses}`}
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
        </div>
    )
}

export default FreeTime