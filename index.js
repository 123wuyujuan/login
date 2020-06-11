
function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    const arr=[...arguments]

    
    tags=arr.sort((item1,item2)=>item1>item2);
    return tags;//返回已经排序的数组
}
 
var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
console.info(result);//显示结果