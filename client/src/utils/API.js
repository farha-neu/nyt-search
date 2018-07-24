import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "c42c8ce0786b4f0cb1fcc02fca9c7ea4";

export default {
    search: function(query,beginDate,endDate) {
        var q =BASEURL+"api-key="+APIKEY+"&q="+query;
        if(beginDate){
            q =q+"&begin_date="+beginDate+"0101";
        }
        if(endDate){
            q =q+"&end_date="+endDate+"1230";
        }
         console.log(q);
        return axios.get(q);
    },

    landingSearch: function(){
        return axios.get(BASEURL+"api-key="+APIKEY+"&sort=newest");
    }
};
