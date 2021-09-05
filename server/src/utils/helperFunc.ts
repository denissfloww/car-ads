export const countYears = async (yearsToArray: number[], yearsFromArray: number[]) => {
    const minimumYear = Math.min(...yearsFromArray);
    let maxYear: number = Math.max(...yearsToArray);
    yearsToArray.map((year: number) => {
        if (!year){
            maxYear = new Date().getFullYear();
        }
    })

    let yee: number[] = [];

    for(let i = minimumYear; i <= maxYear; i++){
        yee.push(i)
    }

    return yee;
}