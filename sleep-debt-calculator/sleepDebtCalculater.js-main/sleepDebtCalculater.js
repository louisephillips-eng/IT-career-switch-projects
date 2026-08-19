const getSleepHours = day => {


    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 7;
    } else if (day === 'thursday') {
        return 9;
    } else if (day === 'friday') {
        return 8;
    } else if (day === 'saturday') {
        return 9;
    } else if (day === 'sunday') {
        return 6;
    } else {
        return 'oops, error!';
    }
};

const getActualSleepHours = () => {
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

   console.log(getSleepHours('monday')); 
   console.log(getActualSleepHours());

   const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
   };
}


