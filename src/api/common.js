import service from "@/utils/request";

export function Getcode(date){
    return service.request({
        method:"post",
        url:"/getCode/",
        date
    })

}