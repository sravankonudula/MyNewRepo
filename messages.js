
module.exports = function(cousename, desc){
    this.coursename = coursename;
    this.desc= desc;
    this.detail = function (){
        return this.coursename + " " + this.desc;
    };
};