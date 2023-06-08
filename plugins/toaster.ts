/**
 * @Description:
 * @author: fanlu
 * @date:  2023/6/8
 * @project: Axiss_app
 */
import { useToast } from 'vue-toast-notification';
const toast = useToast();
export default defineNuxtPlugin(() => {
    return {
        provide: {
            toast,
        }
    }
});
