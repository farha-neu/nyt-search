import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "c42c8ce0786b4f0cb1fcc02fca9c7ea4";

export default {
    search: function(query,beginDate,endDate) {
        if(beginDate){
            return axios.get(BASEURL+"api-key="+APIKEY+"&q="+query+"&begin_date="+beginDate+"&end_date="+endDate+"&sort=newest");
        }
        else{
            return axios.get(BASEURL+"api-key="+APIKEY+"&q="+query+"&sort=newest");
        }
    },

    landingSearch: function(){
        return axios.get(BASEURL+"api-key="+APIKEY+"&sort=newest");
    }
};
