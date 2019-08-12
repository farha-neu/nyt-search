import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "w4epxmzeFWC8S1UNUINhaj6MYVKWt626";

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
