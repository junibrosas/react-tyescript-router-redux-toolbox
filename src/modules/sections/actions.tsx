export default {
    action_section_change_details(title: string, introduction: string){
        return {
            type: 'SECTION_CHANGE_DETAILS',
            title,
            introduction
        }
    }
} 


