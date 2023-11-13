const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']



const getDayMonthYear = ( dateString ) => {

    const date = new Date( dateString )
    const day = date.getDate()
    const month = months[ date.getMonth() ]
    const dayWeek = days[ date.getDay() ]
    const year = date.getFullYear()

    return {
        day,
        month,
        dayWeek,
        year
    }

}


export default getDayMonthYear