;/*FB_PKG_DELIM*/

__d("ProfileCometTimelineFeedQuery.graphql",["IsWorkUser.relayprovider","IsMergQAPolls.relayprovider","StoriesArmadilloReplyEnabled.relayprovider","StoriesRing.relayprovider","CometFeedUnit_feedUnit$normalization.graphql","ProfileCometTimelineFeedQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";var g={__relay_internal__pv__IsWorkUserrelayprovider:b("IsWorkUser.relayprovider"),__relay_internal__pv__IsMergQAPollsrelayprovider:b("IsMergQAPolls.relayprovider"),__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider:b("StoriesArmadilloReplyEnabled.relayprovider"),__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")};a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"UFI2CommentsProvider_commentsKey"},c={defaultValue:null,kind:"LocalArgument",name:"afterTime"},d={defaultValue:null,kind:"LocalArgument",name:"beforeTime"},e={defaultValue:3,kind:"LocalArgument",name:"count"},f={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextEnableComment"},h={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAdPreview"},i={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAggregatedShare"},j={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsStorySet"},k={defaultValue:null,kind:"LocalArgument",name:"displayCommentsFeedbackContext"},l={defaultValue:null,kind:"LocalArgument",name:"feedLocation"},m={defaultValue:null,kind:"LocalArgument",name:"feedbackSource"},n={defaultValue:null,kind:"LocalArgument",name:"focusCommentID"},o={defaultValue:null,kind:"LocalArgument",name:"memorializedSplitTimeFilter"},p={defaultValue:null,kind:"LocalArgument",name:"omitPinnedPost"},q={defaultValue:null,kind:"LocalArgument",name:"postedBy"},r={defaultValue:null,kind:"LocalArgument",name:"privacy"},s={defaultValue:null,kind:"LocalArgument",name:"privacySelectorRenderLocation"},t={defaultValue:null,kind:"LocalArgument",name:"renderLocation"},u={defaultValue:null,kind:"LocalArgument",name:"scale"},v={defaultValue:!0,kind:"LocalArgument",name:"shouldShowProfilePinnedPost"},w={defaultValue:1,kind:"LocalArgument",name:"stream_count"},x={defaultValue:null,kind:"LocalArgument",name:"taggedInOnly"},y={defaultValue:!1,kind:"LocalArgument",name:"useDefaultActor"},z={defaultValue:null,kind:"LocalArgument",name:"userID"},A=[{kind:"Variable",name:"id",variableName:"userID"}],B={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},C=[{kind:"Variable",name:"after_time",variableName:"afterTime"},{kind:"Variable",name:"before_time",variableName:"beforeTime"},{kind:"Variable",name:"first",variableName:"count"},{kind:"Variable",name:"memorialized_split_time_filter",variableName:"memorializedSplitTimeFilter"},{kind:"Variable",name:"omit_pinned_post",variableName:"omitPinnedPost"},{kind:"Variable",name:"posted_by",variableName:"postedBy"},{kind:"Variable",name:"privacy",variableName:"privacy"},{kind:"Variable",name:"tagged_in_only",variableName:"taggedInOnly"}],D=[B];return{fragment:{argumentDefinitions:[a,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z],kind:"Fragment",metadata:null,name:"ProfileCometTimelineFeedQuery",selections:[{kind:"RequiredField",field:{alias:null,args:A,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"stream_count",variableName:"stream_count"}],kind:"FragmentSpread",name:"ProfileCometTimelineFeed_user"},{args:[{kind:"Variable",name:"should_show_profile_pinned_post",variableName:"shouldShowProfilePinnedPost"}],kind:"FragmentSpread",name:"ProfileCometTimelineFeed_aux"}],storageKey:null},action:"THROW",path:"user"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,d,e,k,f,h,i,j,l,m,n,o,q,r,s,u,w,x,p,t,v,y,z,a,{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__IsWorkUserrelayprovider"},{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__IsMergQAPollsrelayprovider"},{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider"},{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__StoriesRingrelayprovider"}],kind:"Operation",name:"ProfileCometTimelineFeedQuery",selections:[{alias:null,args:A,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[B,{alias:"timeline_list_feed_units",args:C,concreteType:"TimelineFeedUnitsConnection",kind:"LinkedField",name:"timeline_feed_units",plural:!1,selections:[{"if":null,kind:"Stream",label:"ProfileCometTimelineFeed_user$stream$ProfileCometTimelineFeed_user_timeline_list_feed_units",selections:[{alias:null,args:null,concreteType:"TimelineFeedUnitsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isFeedUnit"},{args:null,fragment:b("CometFeedUnit_feedUnit$normalization.graphql"),kind:"FragmentSpread"},{kind:"InlineFragment",selections:D,type:"Story",abstractKey:null},{kind:"InlineFragment",selections:D,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:D,type:"CommunityTabNewJoinFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:D,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:D,type:"FBShortsMidCardFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:D,type:"XFBDummyReelsInWatchIFU",abstractKey:null},{kind:"InlineFragment",selections:D,type:"XFBSFTFeedUnit",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null}]},{"if":null,kind:"Defer",label:"ProfileCometTimelineFeed_user$defer$ProfileCometTimelineFeed_user_timeline_list_feed_units$page_info",selections:[{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}]}],storageKey:null},{alias:"timeline_list_feed_units",args:C,filters:["after_time","before_time","posted_by","privacy","tagged_in_only","memorialized_split_time_filter","omit_pinned_post"],handle:"connection",key:"ProfileCometTimelineFeed_user_timeline_list_feed_units",kind:"LinkedHandle",name:"timeline_feed_units"},{condition:"shouldShowProfilePinnedPost",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"ProfilePinnedPost",kind:"LinkedField",name:"profile_pinned_post",plural:!1,selections:[{args:null,documentName:"ProfileCometTimelineFeed_aux",fragmentName:"ProfileCometPinnedPostSection_profile_pinned_post",fragmentPropName:"profile_pinned_post",kind:"ModuleImport"},B],storageKey:null}]}],storageKey:null}]},params:{id:b("ProfileCometTimelineFeedQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometTimelineFeedQuery",operationKind:"query",text:null,providedVariables:g}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("ProfileCometTimelineFeedRefetchQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9731192226923233"}),null);
__d("ProfileCometTimelineFeedRefetchQuery.graphql",["IsWorkUser.relayprovider","IsMergQAPolls.relayprovider","StoriesArmadilloReplyEnabled.relayprovider","StoriesRing.relayprovider","CometFeedUnit_feedUnit$normalization.graphql","ProfileCometTimelineFeedRefetchQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";var g={__relay_internal__pv__IsWorkUserrelayprovider:b("IsWorkUser.relayprovider"),__relay_internal__pv__IsMergQAPollsrelayprovider:b("IsMergQAPolls.relayprovider"),__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider:b("StoriesArmadilloReplyEnabled.relayprovider"),__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")};a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"UFI2CommentsProvider_commentsKey"},c={defaultValue:null,kind:"LocalArgument",name:"afterTime"},d={defaultValue:null,kind:"LocalArgument",name:"beforeTime"},e={defaultValue:3,kind:"LocalArgument",name:"count"},f={defaultValue:null,kind:"LocalArgument",name:"cursor"},h={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextEnableComment"},i={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAdPreview"},j={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAggregatedShare"},k={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsStorySet"},l={defaultValue:null,kind:"LocalArgument",name:"displayCommentsFeedbackContext"},m={defaultValue:null,kind:"LocalArgument",name:"feedLocation"},n={defaultValue:null,kind:"LocalArgument",name:"feedbackSource"},o={defaultValue:null,kind:"LocalArgument",name:"focusCommentID"},p={defaultValue:null,kind:"LocalArgument",name:"id"},q={defaultValue:null,kind:"LocalArgument",name:"memorializedSplitTimeFilter"},r={defaultValue:null,kind:"LocalArgument",name:"omitPinnedPost"},s={defaultValue:null,kind:"LocalArgument",name:"postedBy"},t={defaultValue:null,kind:"LocalArgument",name:"privacy"},u={defaultValue:null,kind:"LocalArgument",name:"privacySelectorRenderLocation"},v={defaultValue:null,kind:"LocalArgument",name:"renderLocation"},w={defaultValue:null,kind:"LocalArgument",name:"scale"},x={defaultValue:1,kind:"LocalArgument",name:"stream_count"},y={defaultValue:null,kind:"LocalArgument",name:"taggedInOnly"},z={defaultValue:null,kind:"LocalArgument",name:"useDefaultActor"},A=[{kind:"Variable",name:"id",variableName:"id"}],B={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},C={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},D=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"after_time",variableName:"afterTime"},{kind:"Variable",name:"before_time",variableName:"beforeTime"},{kind:"Variable",name:"first",variableName:"count"},{kind:"Variable",name:"memorialized_split_time_filter",variableName:"memorializedSplitTimeFilter"},{kind:"Variable",name:"omit_pinned_post",variableName:"omitPinnedPost"},{kind:"Variable",name:"posted_by",variableName:"postedBy"},{kind:"Variable",name:"privacy",variableName:"privacy"},{kind:"Variable",name:"tagged_in_only",variableName:"taggedInOnly"}],E=[C];return{fragment:{argumentDefinitions:[a,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z],kind:"Fragment",metadata:null,name:"ProfileCometTimelineFeedRefetchQuery",selections:[{alias:null,args:A,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"},{kind:"Variable",name:"stream_count",variableName:"stream_count"}],kind:"FragmentSpread",name:"ProfileCometTimelineFeed_user"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,c,d,e,f,h,i,j,k,l,m,n,o,q,r,s,t,u,v,w,x,y,z,p,{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__IsWorkUserrelayprovider"},{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__IsMergQAPollsrelayprovider"},{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__StoriesArmadilloReplyEnabledrelayprovider"},{defaultValue:null,kind:"LocalArgument",name:"__relay_internal__pv__StoriesRingrelayprovider"}],kind:"Operation",name:"ProfileCometTimelineFeedRefetchQuery",selections:[{alias:null,args:A,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[B,C,{kind:"InlineFragment",selections:[{alias:"timeline_list_feed_units",args:D,concreteType:"TimelineFeedUnitsConnection",kind:"LinkedField",name:"timeline_feed_units",plural:!1,selections:[{"if":null,kind:"Stream",label:"ProfileCometTimelineFeed_user$stream$ProfileCometTimelineFeed_user_timeline_list_feed_units",selections:[{alias:null,args:null,concreteType:"TimelineFeedUnitsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[B,{kind:"TypeDiscriminator",abstractKey:"__isFeedUnit"},{args:null,fragment:b("CometFeedUnit_feedUnit$normalization.graphql"),kind:"FragmentSpread"},{kind:"InlineFragment",selections:E,type:"Story",abstractKey:null},{kind:"InlineFragment",selections:E,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:E,type:"CommunityTabNewJoinFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:E,type:"CommunityTabTrendingPOGFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:E,type:"FBShortsMidCardFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:E,type:"XFBDummyReelsInWatchIFU",abstractKey:null},{kind:"InlineFragment",selections:E,type:"XFBSFTFeedUnit",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null}]},{"if":null,kind:"Defer",label:"ProfileCometTimelineFeed_user$defer$ProfileCometTimelineFeed_user_timeline_list_feed_units$page_info",selections:[{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}]}],storageKey:null},{alias:"timeline_list_feed_units",args:D,filters:["after_time","before_time","posted_by","privacy","tagged_in_only","memorialized_split_time_filter","omit_pinned_post"],handle:"connection",key:"ProfileCometTimelineFeed_user_timeline_list_feed_units",kind:"LinkedHandle",name:"timeline_feed_units"}],type:"User",abstractKey:null}],storageKey:null}]},params:{id:b("ProfileCometTimelineFeedRefetchQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometTimelineFeedRefetchQuery",operationKind:"query",text:null,providedVariables:g}}}();e.exports=a}),null);
__d("ProfileCometTimelineFeed_aux.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!0,kind:"LocalArgument",name:"should_show_profile_pinned_post"}],kind:"Fragment",metadata:null,name:"ProfileCometTimelineFeed_aux",selections:[{condition:"should_show_profile_pinned_post",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"ProfilePinnedPost",kind:"LinkedField",name:"profile_pinned_post",plural:!1,selections:[{args:null,documentName:"ProfileCometTimelineFeed_aux",fragmentName:"ProfileCometPinnedPostSection_profile_pinned_post",fragmentPropName:"profile_pinned_post",kind:"ModuleImport"}],storageKey:null}]}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTimelineFeed_user.graphql",["ProfileCometTimelineFeedRefetchQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["timeline_list_feed_units"],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"UFI2CommentsProvider_commentsKey"},{kind:"RootArgument",name:"afterTime"},{kind:"RootArgument",name:"beforeTime"},{defaultValue:3,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{kind:"RootArgument",name:"displayCommentsContextEnableComment"},{kind:"RootArgument",name:"displayCommentsContextIsAdPreview"},{kind:"RootArgument",name:"displayCommentsContextIsAggregatedShare"},{kind:"RootArgument",name:"displayCommentsContextIsStorySet"},{kind:"RootArgument",name:"displayCommentsFeedbackContext"},{kind:"RootArgument",name:"feedLocation"},{kind:"RootArgument",name:"feedbackSource"},{kind:"RootArgument",name:"focusCommentID"},{kind:"RootArgument",name:"memorializedSplitTimeFilter"},{kind:"RootArgument",name:"omitPinnedPost"},{kind:"RootArgument",name:"postedBy"},{kind:"RootArgument",name:"privacy"},{kind:"RootArgument",name:"privacySelectorRenderLocation"},{kind:"RootArgument",name:"renderLocation"},{kind:"RootArgument",name:"scale"},{defaultValue:1,kind:"LocalArgument",name:"stream_count"},{kind:"RootArgument",name:"taggedInOnly"},{kind:"RootArgument",name:"useDefaultActor"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a,stream:!0}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["node"],operation:b("ProfileCometTimelineFeedRefetchQuery.graphql"),identifierInfo:{identifierField:"id",identifierQueryVariableName:"id"}}},name:"ProfileCometTimelineFeed_user",selections:[{kind:"RequiredField",field:c,action:"LOG",path:"id"},{kind:"RequiredField",field:{alias:"timeline_list_feed_units",args:[{kind:"Variable",name:"after_time",variableName:"afterTime"},{kind:"Variable",name:"before_time",variableName:"beforeTime"},{kind:"Variable",name:"memorialized_split_time_filter",variableName:"memorializedSplitTimeFilter"},{kind:"Variable",name:"omit_pinned_post",variableName:"omitPinnedPost"},{kind:"Variable",name:"posted_by",variableName:"postedBy"},{kind:"Variable",name:"privacy",variableName:"privacy"},{kind:"Variable",name:"tagged_in_only",variableName:"taggedInOnly"}],concreteType:"TimelineFeedUnitsConnection",kind:"LinkedField",name:"__ProfileCometTimelineFeed_user_timeline_list_feed_units_connection",plural:!1,selections:[{kind:"Stream",selections:[{alias:null,args:null,concreteType:"TimelineFeedUnitsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometFeedUnit_feedUnit"},{kind:"InlineFragment",selections:[c],type:"Story",abstractKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null}]},{kind:"Defer",selections:[{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}]}],storageKey:null},action:"THROW",path:"timeline_list_feed_units"}],type:"User",abstractKey:null}}();e.exports=a}),null);
__d("CometFeedUnitSetDebugInfoContextProvider.react",["CometFeedUnitDebugInfoState","CometFeedUnitSetDebugInfoContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.children,e=a.location;a=i(function(a,b){return d("CometFeedUnitDebugInfoState").addFeedUnitDebugInfo(e,a,b)},[e]);return h.jsx(c("CometFeedUnitSetDebugInfoContext").Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProgressiveDateUtil",["DateConsts"],(function(a,b,c,d,e,f,g){"use strict";function h(a){var b=a.day,c=a.month;a=a.year;if(a==null)return Object.freeze({});if(c==null)return{year:a};if(b==null)return{month:c,year:a};var e=d("DateConsts").getDaysInMonth(a,c);return b>e?{day:e,month:c,year:a}:{day:b,month:c,year:a}}function a(a){if(a==null)return{};a=a.split("-").map(function(a){return parseInt(a,10)});var b=a[0],c=a[1];a=a[2];return h({day:a,month:c,year:b})}function b(a){var b=null;a.day!=null&&(b=a.day);var c=null;a.month!=null&&(c=a.month);var d=null;a.year!=null&&(d=a.year);return{day:b,month:c,year:d}}function c(a){var b=null;a.day!=null&&a.month!=null&&a.year!=null?b=new Date(a.year,a.month-1,a.day+1):a.month!=null&&a.year!=null?b=new Date(a.year,a.month,1):a.year!=null&&(b=new Date(a.year+1,0,1));return b!=null?b.setSeconds(-1)/1e3:null}g.makeValidDate=h;g.parseDate=a;g.toMaybeDate=b;g.toLatestTimestamp=c}),98);
__d("ProfileCometTimelineEmptyState.react",["fbt","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx("div",{className:"xyamay9 x1pi30zi x1l90r2v x1swvt13",children:i.jsx(c("TetraText.react"),{align:"center",color:"secondary",type:"headlineEmphasized2",children:h._("Inga tillg\u00e4ngliga inl\u00e4gg")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometTimelineFilterReducer",["ProgressiveDateUtil"],(function(a,b,c,d,e,f,g){"use strict";a=function(){return{date:{},hasBeenChanged:!1,postedBy:"ANYONE",privacy:"ALL",taggedPosts:"ALL"}};b=function(a,b){switch(b.type){case"SET_FILTERS":var c=d("ProgressiveDateUtil").makeValidDate(d("ProgressiveDateUtil").toMaybeDate(b.date));return babelHelpers["extends"]({},a,{date:c,hasBeenChanged:!0,postedBy:b.postedBy,privacy:b.privacy,taggedPosts:b.taggedPosts});default:return babelHelpers["extends"]({},a)}};g.getInitialState=a;g.reducer=b}),98);
__d("ProfileCometTimelineFilterContext",["FBLogger","ProfileCometTimelineFilterReducer","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({dispatchAction:function(a){c("FBLogger")("comet_profile").mustfix("ProfileCometTimelineFilterContext: Tried to dispatch an action\n        without providing a dispatch function. Please render this component with\n        a context provider, e.g.:\n        <ProfileCometTimelineFilterContext.Provider value={context} />")},state:d("ProfileCometTimelineFilterReducer").getInitialState()});g["default"]=b}),98);
__d("useProfileCometTimelineFeedQueryRefetcherForFilters",["ProfileCometTimelineFilterContext","ProgressiveDateUtil","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useContext,i=b.useEffect,j=b.useRef,k=b.useState;function a(a){var b=a.fetchCount,e=a.refetch;a=a.variables;var f=a.userID;a=babelHelpers.objectWithoutPropertiesLoose(a,["userID"]);var g=j(a);a=k(!1);var l=a[0],m=a[1],n=j(!0),o=j(e),p=j(b),q=j(f);o.current=e;p.current=b;q.current=f;a=h(c("ProfileCometTimelineFilterContext"));var r=a.state,s=d("ProgressiveDateUtil").toLatestTimestamp(r.date),t=j({dispose:function(){}});i(function(){if(n.current){n.current=!1;return}if(c("gkx")("2684")&&!r.hasBeenChanged)return;var a;switch(r.postedBy){case"ANYONE":a=null;break;case"OTHERS":a={group:"NON_OWNER"};break;case"YOU":a={group:"OWNER"};break}var b;switch(r.privacy){case"PUBLIC":b={exclusivity:"EXCLUSIVE",filter:"PUBLIC"};break;case"FRIENDS":b={exclusivity:"EXCLUSIVE",filter:"FRIENDS"};break;case"ONLY_ME":b={exclusivity:"EXCLUSIVE",filter:"SELF"};break;case"ALL":b={exclusivity:"INCLUSIVE",filter:"ALL"};break}var d=r.taggedPosts==="TAGGED";m(!0);t.current.dispose();t.current=o.current(babelHelpers["extends"]({},g.current,{beforeTime:s,count:p.current,id:q.current,postedBy:a,privacy:b,taggedInOnly:d}),{fetchPolicy:"store-and-network",onComplete:function(){m(!1)}})},[s,r.hasBeenChanged,r.postedBy,r.privacy,r.taggedPosts]);return l}g["default"]=a}),98);
__d("ProfileCometTimelineFeed.react",["fbt","CometDOMOnlyBoundary.react","CometFeedInfiniteScrollSuspenseList.react","CometFeedSection.react","CometFeedUnit.react","CometHeroFeedItem.react","CometRelay","ProfileCometTimelineEmptyState.react","ProfileCometTimelineFeed_aux.graphql","ProfileCometTimelineFeed_user.graphql","react","useCometFeedKeyCommands","useNullthrowsViolation","useProfileCometTimelineFeedQueryRefetcherForFilters","useProfileEngagementImpression"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=d("react");e=d("react");var l=e.useCallback,m=e.useRef,n=3;function o(a){var b=a.node,d=a.position;a=a.variables;var e={profile_item_type:"story",profile_product_bucket:"timeline",profile_subsurface:"feed",profile_surface:"timeline"};e=c("useProfileEngagementImpression")(e);return k.jsx("div",{ref:e,children:k.jsx(c("CometFeedUnit.react"),{feedUnit:b,position:d,variables:a})})}o.displayName=o.name+" [from "+f.id+"]";var p=i!==void 0?i:i=b("ProfileCometTimelineFeed_user.graphql");function a(a){var e=a.user,f=a.variables;a=d("CometRelay").usePaginationFragment(p,e);var g=a.data,i=a.hasNext,q=a.isLoadingNext,r=a.loadNext;a=a.refetch;var s=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometTimelineFeed_aux.graphql"),e);e=d("CometRelay").useIsParentQueryActive(p,e);var t=i||e,u=m({dispose:function(){}}),v=c("useProfileCometTimelineFeedQueryRefetcherForFilters")({fetchCount:n,refetch:a,variables:f});v&&u.current.dispose();a=q||e||v;e=l(function(a){if(!i||q||v)return;u.current=r(n)},[i,q,v,r]);g=c("useNullthrowsViolation")(g==null?void 0:g.timeline_list_feed_units.edges);c("useCometFeedKeyCommands")(g.length,"timeline");var w=s==null?void 0:s.profile_pinned_post,x=k.jsx(c("CometDOMOnlyBoundary.react"),{fallback:null,children:k.jsx(d("CometRelay").MatchContainer,{match:w,props:{variables:f}})});if(g.length===0)return(s==null?void 0:s.profile_pinned_post)!=null?x:k.jsx(c("ProfileCometTimelineEmptyState.react"),{});var y=0;s=k.jsx(c("CometFeedInfiniteScrollSuspenseList.react"),{hasMore:t,interactionSource:3,isLoading:a,onLoadMore:e,waitOnScrollIntent:!0,children:g.map(function(a,b){var d;a=a.node;return a!=null?k.jsx(c("CometHeroFeedItem.react"),{position:y,children:k.jsx(o,{node:a,position:y++,variables:f},(d=a.id)!=null?d:b)},a.id!=null?a.id:b):null})});return k.jsxs(k.Fragment,{children:[x,w?k.jsx(c("CometFeedSection.react"),{sectionContents:s,title:h._("Andra inl\u00e4gg")}):s]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometTimeline.react",["CometErrorBoundary.react","CometFeedUnitSetDebugInfoContextProvider.react","CometHero.react","CometRelay","ProfileCometTimelineError.react","ProfileCometTimelineFeed.react","ProfileCometTimelineFeedQuery.graphql","VideoAutoplayLocalScopeProvider.react","VideoPlayerAutoplayRulesProvider","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("default_feed");function a(a){a=a.timelineFeedQueryReference;var e=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("ProfileCometTimelineFeedQuery.graphql"),a);e=e.user;return i.jsx(c("CometErrorBoundary.react"),{fallback:function(){return i.jsx(c("ProfileCometTimelineError.react"),{})},children:i.jsxs(c("VideoAutoplayLocalScopeProvider.react"),{autoplayLocalRules:j,children:[i.jsx(c("CometHero.react"),{description:"ProfileFeed"}),i.jsx(c("CometFeedUnitSetDebugInfoContextProvider.react"),{location:"timeline",children:i.jsx(c("ProfileCometTimelineFeed.react"),{user:e,variables:a.variables})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);