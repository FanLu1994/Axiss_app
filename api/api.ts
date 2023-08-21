/**
 * @Description:
 * @author: fanlu
 * @date:  2023/8/21
 * @project: Axiss_app
 */
import httpRequest from "~/api/index";
import * as http from "http";

// 获取url标题
export const getWebTitle = (params:any)=>{
    return httpRequest.get("md/get_website_title")
}

// 保存书签
export const saveUrl = (params:any)=>{
    return httpRequest.post("benchmark/add",params)
}

// 获取标签页
export const getUrls = (params:any)=>{
    return httpRequest.get("benchmark/get",params)
}
