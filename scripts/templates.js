this["templates"] = this["templates"] || {};

this["templates"]["social_links"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"{profile_url}\" target=\"_blank\"><svg class=\"icon-"
    + alias4(((helper = (helper = helpers.service_name || (depth0 != null ? depth0.service_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"service_name","hash":{},"data":data}) : helper)))
    + "\"><use xlink:href=\"/assets/icons.svg#icon-"
    + alias4(((helper = (helper = helpers.service_name || (depth0 != null ? depth0.service_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"service_name","hash":{},"data":data}) : helper)))
    + "\"></use></svg></a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.links : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});