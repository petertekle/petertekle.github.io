// const result = true;

const result = false || 0 || 0.0 || '' || null || undefined || NaN;
if(result){
    console.log('Inside Truthy....')
} else {
    console.log('Inside Falsey!!!')
}