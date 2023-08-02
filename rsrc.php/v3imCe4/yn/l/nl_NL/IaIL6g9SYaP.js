;/*FB_PKG_DELIM*/

__d("CometFeedUnitCard_feedUnit.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedUnitCard_feedUnit",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Story",abstractKey:null}],type:"FeedUnit",abstractKey:"__isFeedUnit"};e.exports=a}),null);
__d("CometFeedUnitErrorBoundary_feedUnit.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedUnitErrorBoundary_feedUnit",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"SponsoredData",kind:"LinkedField",name:"sponsored_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],type:"Story",abstractKey:null},{args:null,kind:"FragmentSpread",name:"useCometFeedUnitEventLogger_feedUnit"}],type:"FeedUnit",abstractKey:"__isFeedUnit"};e.exports=a}),null);
__d("CometFeedUnit_feedUnit.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"hasScenario"}],kind:"Fragment",metadata:null,name:"CometFeedUnit_feedUnit",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"debug_info",storageKey:null},a,{alias:null,args:null,concreteType:"SponsoredData",kind:"LinkedField",name:"sponsored_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ad_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"brs_filter_setting",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"client_token",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"post_rendering_loggers",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"associated_group",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"context_actor_hovercard",storageKey:null},a],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_story_civic",storageKey:null}],type:"Story",abstractKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedUnitCard_feedUnit"},{args:[{kind:"Variable",name:"hasScenario",variableName:"hasScenario"}],kind:"FragmentSpread",name:"CometFeedUnitContainerSection_feedUnit"},{args:null,kind:"FragmentSpread",name:"CometFeedUnitErrorBoundary_feedUnit"},{args:null,kind:"FragmentSpread",name:"CometFeedUnit_trackableFeedUnit"}],type:"FeedUnit",abstractKey:"__isFeedUnit"}}();e.exports=a}),null);
__d("CometFeedUnit_newsFeedEdge.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedUnit_newsFeedEdge",selections:[{alias:null,args:null,kind:"ScalarField",name:"brs_content_label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deduplication_key",storageKey:null}],type:"NewsFeedEdge",abstractKey:null};e.exports=a}),null);
__d("CometFeedUnit_trackableFeedUnit.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedUnit_trackableFeedUnit",selections:[{alias:null,args:null,concreteType:"TrackingData",kind:"LinkedField",name:"trackingdata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"viewability_config",storageKey:null},{alias:null,args:null,concreteType:"CometClientViewConfig",kind:"LinkedField",name:"client_view_config",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_delay_log_impression",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_signal_imp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_banzai_vital_imp",storageKey:null}],storageKey:null}],type:"Story",abstractKey:null}],type:"TrackableFeedUnit",abstractKey:"__isTrackableFeedUnit"};e.exports=a}),null);
__d("useCometFeedUnitEventLogger_feedUnit.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,concreteType:"QuickPromotionFeedUnitItem",kind:"LinkedField",name:"quick_promotion_items",plural:!0,selections:[{alias:null,args:null,concreteType:"QuickPromotion",kind:"LinkedField",name:"quick_promotion",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometFeedUnitEventLogger_feedUnit",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:a,type:"QuickPromotionFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:a,type:"QuickPromotionNativeTemplateFeedUnit",abstractKey:null}],type:"FeedUnit",abstractKey:"__isFeedUnit"}}();e.exports=a}),null);
__d("CometFeedUnitContainerSection_feedUnit.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"hasScenario"}],kind:"Fragment",metadata:null,name:"CometFeedUnitContainerSection_feedUnit",selections:[{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"hasScenario",variableName:"hasScenario"}],documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFeedUnitStoryStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"Story",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFeedUnitGoodwillMemoryStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"GoodwillCometStory",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometPYMKQPFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"PaginatedPeopleYouMayKnowFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometReelsFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"ShowcaseFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFriendRequestsFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"FriendRequestsFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometFeedUnitQuickPromotionStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"QuickPromotionNativeTemplateFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"GroupsCometGYSJFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"GroupsYouShouldJoinFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometGroupsSuggestionFeedUnitStrategy_unit",fragmentPropName:"unit",kind:"ModuleImport"}],type:"GroupsSuggestionUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometPYMIQPFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"PaginatedGroupsPeopleYouMayInviteFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"GeminiPYSFQPFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"PeopleYouShouldFollowAtWorkFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometSPFFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"SuggestedPublicEntitiesToFollowFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CoronavirusCommunityHelpFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"CoronavirusCommunityHelpFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometEndOfFeedUpsellStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"EndOfFeedUpsellFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometGroupRelatedGroupsFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"GroupRelatedGroupsFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometGroupRelatedKeywordsFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"GroupRelatedKeywordsFeedUnit",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometFeedUnitContainerSection_feedUnit",fragmentName:"CometStoriesSingleBucketFeedUnitStrategy_feedUnit",fragmentPropName:"feedUnit",kind:"ModuleImport"}],type:"StoriesSingleBucketInlineViewerFeedUnit",abstractKey:null},{args:null,kind:"FragmentSpread",name:"CometFeedUnitUnknownFeedUnitStrategy_feedUnit"}],type:"FeedUnit",abstractKey:"__isFeedUnit"};e.exports=a}),null);
__d("useMergeCometAriaProps",["useSetAttributeRef"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b;for(var d=arguments.length,e=new Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];var g=e.reduce(function(b,c){Object.prototype.hasOwnProperty.call(c,a)&&typeof c[a]==="string"&&b.push(c[a]);return b},[]).join(" "),h=c("useSetAttributeRef")(a,g);return[(b={},b[a]=g,b.suppressHydrationWarning=!0,b),h]}g["default"]=a}),98);
__d("CometFeedInfiniteScrollSuspenseList.react",["CometFeedGlimmer.react","CometFeedTailLoadBufferHeight","CometInfiniteScrollSuspenseList.react","CometInfiniteScrollSuspenseListIncrementalRenderer.react","CometInteractionSourceContext","FBLogger","QuickPerformanceLogger","WebConnectionClassServerGuess","gkx","qpl","react","useHasDemonstratedScrollIntent","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=a.incrementalRendering;b=b===void 0?!0:b;var d=a.waitOnScrollIntent,e=a.children,f=a.hasMore,g=a.incrementalRenderingPageSizes,j=a.interactionSource,k=a.isLoading,l=a.onLoadMore,m=a.pageletName,n=a.positionLimitForSSR,o=a.revealOrder;c("gkx")("3048")&&(b=!1,d=!1);var p=c("useHasDemonstratedScrollIntent")();a=i(function(){return{onVisible:function(){c("QuickPerformanceLogger").markEvent(c("qpl")._(655653,"17524"),"collision_happened",7,{annotations:{bool:{had_demonstrated_scroll_intent:p},"int":{interaction_source:j}}})}}},[j,p]);a=c("useVisibilityObserver")(a);var q=i(function(){var a;if(d===!0&&!p)return 0;var b;switch(c("WebConnectionClassServerGuess").connectionClass){case"UNKNOWN":case"EXCELLENT":default:b=c("CometFeedTailLoadBufferHeight").EXCELLENT;break;case"GOOD":b=c("CometFeedTailLoadBufferHeight").GOOD;break;case"MODERATE":b=c("CometFeedTailLoadBufferHeight").MODERATE;break;case"POOR":b=c("CometFeedTailLoadBufferHeight").POOR;break}b==null&&(c("FBLogger")("comet_feed").mustfix("Found no tail load buffer height value for the connection class `%s`. Falling back to 2500px.",c("WebConnectionClassServerGuess").connectionClass),b=2500);return a={},a[o==="backwards"?"top":"bottom"]=b,a},[o,p,d]);a={endGlimmerRef:a,hasMore:f,isLoading:k,listGlimmer:h.jsx(c("CometFeedGlimmer.react"),{}),onLoadMore:l,pageletName:m,positionLimitForSSR:n,revealOrder:o,rootMargin:q};if(b&&(o==null||o==="forwards"))return h.jsx(c("CometInteractionSourceContext").Provider,{value:j,children:h.jsx(c("CometInfiniteScrollSuspenseListIncrementalRenderer.react"),babelHelpers["extends"]({pageSizes:g},a,{children:e}))});else return h.jsx(c("CometInteractionSourceContext").Provider,{value:j,children:h.jsx(c("CometInfiniteScrollSuspenseList.react"),babelHelpers["extends"]({},a,{children:e}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedSection.react",["CometUnitHeader.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={fullWidth:{width:"xh8yej3",$$css:!0},title:{marginEnd:"x19f6ikt",marginStart:"x169t7cy",paddingBottom:"xsag5q8",$$css:!0}};function a(a){var b=a.meta,d=a.sectionContents,e=a.title;a=a.widthStyle;a=a===void 0?"none":a;return h.jsxs("div",{className:c("stylex")(a==="full"&&i.fullWidth),"data-testid":void 0,role:"feed",children:[h.jsx("div",{className:"x19f6ikt x169t7cy xsag5q8",children:h.jsx(c("CometUnitHeader.react"),{headline:e,headlineColor:"secondary",level:4,meta:b})}),d]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedAutoFocusedStoryContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometFeedHighlightedStoriesContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=new Set();c=a.createContext(b);g["default"]=c}),98);
__d("CometFeedUnitBorderContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(void 0);g["default"]=b}),98);
__d("CometFeedUnitDropShadowContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(1);g["default"]=b}),98);
__d("CometFeedUnitCard.react",["CometCard.react","CometFeedARIAProperties.react","CometFeedAutoFocusedStoryContext","CometFeedHighlightedStoriesContext","CometFeedStoryAttachmentCommandWidget","CometFeedUnitBorderContext","CometFeedUnitCard_feedUnit.graphql","CometFeedUnitDropShadowContext","CometHideableComponent.react","CometKeyCommandWrapper.react","CometRelay","FocusWithinHandler.react","UserAgent","cr:430","emptyFunction","gkx","mergeRefs","react","useCometAriaID","useCometScrollAnchor","useMergeCometAriaProps"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useContext,k=e.useMemo,l=e.useRef,m=e.useState;e=(e=b("cr:430"))!=null?e:{useCometFocusHighlightedContent:c("emptyFunction")};var n=e.useCometFocusHighlightedContent,o=c("gkx")("1754");function a(a){var e=a.children,f=a.position;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedUnitCard_feedUnit.graphql"),a.feedUnit);a=a.id;var g=c("useCometAriaID")("aria-labelledby"),p=g[0],q=p[0],r=p[1];p=g[1];var s=p[0];g=p[1];p=c("useCometAriaID")("aria-describedby");var t=p[0],u=t[0],v=t[1];t=p[1];p=t[0];t[1];t=c("useCometAriaID")("aria-describedby");var w=t[0],x=w[0],y=w[1];w=t[1];t=w[0];w[1];w=c("useCometAriaID")("aria-describedby");var z=w[0],A=z[0],B=z[1];z=w[1];w=z[0];z[1];z=c("useCometAriaID")("aria-describedby");var C=z[0],D=C[0],E=C[1];C=z[1];z=C[0];C[1];C=c("useCometAriaID")("aria-describedby");var F=C[0],G=F[0],H=F[1];F=C[1];C=F[0];F[1];F=c("useMergeCometAriaProps")("aria-describedby",p,t,w,C,z);var I=F[0];p=F[1];var J=k(function(){return{attachmentTargetProps:A,attachmentTargetRef:B,commentCountTargetProps:D,commentCountTargetRef:E,contentTargetProps:x,contentTargetRef:y,metaTargetProps:u,metaTargetRef:v,reactionTargetProps:G,reactionTargetRef:H,titleTargetProps:q,titleTargetRef:r}},[A,B,D,E,x,y,u,v,G,H,q,r]);t=j(c("CometFeedHighlightedStoriesContext"));w=a!=null&&t!=null&&t.has(a);C=m(w);var K=C[0],L=C[1];z=d("useCometScrollAnchor").useCometScrollAnchor("feed-story",a,{onScrollComplete:function(){return L(!0)}});F=l(null);var M=c("mergeRefs")(F,z,p,g);t=j(c("CometFeedAutoFocusedStoryContext"));n(t===a?F:null);w=m(!1);var N=w[0],O=w[1],P=j(c("CometFeedUnitBorderContext")),Q=j(c("CometFeedUnitDropShadowContext")),R=c("UserAgent").isBrowser("Chrome")&&c("UserAgent").isPlatform("Mac OS X");return i.jsx("div",{className:"x1n2onr6 x1ja2u2z",children:i.jsx(c("FocusWithinHandler.react"),{children:function(a,b){var d;if(o){a=b&&a&&!N;a?d="static":K&&(d="animated")}else(K||b)&&(d="animated");a=c("gkx")("8240")?null:{role:"article"};return i.jsx(c("CometKeyCommandWrapper.react"),{debugName:"feed_story",children:i.jsx(c("CometFeedStoryAttachmentCommandWidget").Wrapper,{children:i.jsx("div",babelHelpers["extends"]({"aria-posinset":R?void 0:f+1},I,s,{className:"x1a2a7pz","data-testid":void 0,ref:M},a,{children:i.jsx(c("FocusWithinHandler.react"),{onFocusChange:O,children:i.jsx(c("CometHideableComponent.react"),{children:i.jsx(c("CometCard.react"),{background:"white",border:P,borderHighlight:d,dropShadow:Q,children:i.jsx(c("CometFeedARIAProperties.react").Provider,{value:J,children:e})})})})}))})})}})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedUnitContainerSection.react",["CometFeedMatchRenderer.react","CometFeedUnitContainerSection_feedUnit.graphql","RelayHooks","cr:1448849","react","usePageletMatchMetadata"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useState,l=h!==void 0?h:h=b("CometFeedUnitContainerSection_feedUnit.graphql");function a(a){var e=a.onUnsupported,f=a.position,g=a.variables;a=babelHelpers.objectWithoutPropertiesLoose(a,["onUnsupported","position","variables"]);a=d("RelayHooks").useFragment(l,a.feedUnit);var h=k(!1),m=h[0],n=h[1];h=j(function(){n(!0),e()},[e]);c("usePageletMatchMetadata")("feed_unit",a);if(!m)return i.jsx(c("CometFeedMatchRenderer.react"),{match:a,matchRequired:!0,onUnsupported:h,props:{position:f,variables:g},section:"feed_unit",trackingData:null});return b("cr:1448849")!=null?i.jsx(b("cr:1448849"),{feedUnit:a,position:f}):null}a.displayName=a.name+" [from "+f.id+"]";e=i.memo(a);g["default"]=e}),98);
__d("CometFeedUnitSetStatusContext",["gkx","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback,j=h.createContext(function(){return void 0});function a(a){var b=a.brsContentLabel,d=a.brsFilterSetting,e=a.category,f=a.children,g=a.deduplicationKey,k=a.minGapType,l=a.setFeedUnitRecord;a=i(function(a){g!=null&&e!=null?l(g,{category:e,edgeData:c("gkx")("5162")?{brsContentLabel:b,brsFilterSetting:d}:{},minGapType:k,status:a}):c("recoverableViolation")("Category or deduplication_key cannot be null in CometFeedUnitSetStatusContextProvider; Feed unit status not set.","CometFeedUnitStatusTracking")},[b,d,e,g,k,l]);return h.jsx(j.Provider,{value:a,children:f})}a.displayName=a.name+" [from "+f.id+"]";g.CometFeedUnitSetStatusContext=j;g.CometFeedUnitSetStatusContextProvider=a}),98);
__d("CometFeedUnitsTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:CometFeedUnitsLoggerConfig")}),null);
__d("useCometFeedUnitEventLogger",["CometFeedUnitsTypedLoggerLite","CometRelay","react","useCometFeedUnitEventLogger_feedUnit.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useCallback;function a(a){var e=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometFeedUnitEventLogger_feedUnit.graphql"),a);return i(function(a){var b=a.category,d=a.errorName,f=a.event,g=a.minGapType,h=a.numCommitsBeforeError,i=a.position;a=a.renderLocation;var j=[];e.quick_promotion_items!=null&&(j=e.quick_promotion_items.map(function(a){return(a=a.quick_promotion)==null?void 0:a.id}).filter(Boolean));c("CometFeedUnitsTypedLoggerLite").log({category:b,error_name:d,event:f,min_gap_type:g,num_commits_before_error:h,position:i,related_ids:j,render_location:a,unit_name:e.__typename})},[e])}g["default"]=a}),98);
__d("CometFeedUnitErrorBoundary.react",["CometErrorBoundary.react","CometFeedUnitErrorBoundary_feedUnit.graphql","CometFeedUnitOnFeedUnitErrorContext","CometFeedUnitSetStatusContext","CometFeedUnitShouldPropagateErrorContext","CometRelay","InteractionTracing","cr:1448848","emptyFunction","gkx","react","useCometFeedUnitEventLogger","useCommitCountRef"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useContext,l=e.useState;function a(a){var e=a.category,f=a.children,g=a.feedUnit,m=a.minGapType,n=a.onError,o=a.position,p=a.renderLocation;a=l(null);var q=a[0],r=a[1],s=c("useCommitCountRef")();a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometFeedUnitErrorBoundary_feedUnit.graphql"),g);var t=k(d("CometFeedUnitSetStatusContext").CometFeedUnitSetStatusContext),u=c("useCometFeedUnitEventLogger")(a);g=j(function(a){r(a),t("error"),u({category:e,errorName:a.message,event:"js_error",minGapType:m,numCommitsBeforeError:s.current,position:o,renderLocation:p!=="%future added value"?p:void 0}),c("InteractionTracing").getPendingInteractions().forEach(function(a){a.addAnnotationInt("feedUnitError",1)}),n!=null&&n(a)},[t,u,e,m,s,o,p,n]);if(q!=null)return b("cr:1448848")!=null?i.jsx(b("cr:1448848"),{error:q}):null;q=a.sponsored_data!=null;a=q?c("gkx")("1460645"):c("gkx")("1460646");return i.jsx(c("CometErrorBoundary.react"),{context:{project:"CometFeedUnitErrorBoundary"},onError:g,children:i.jsx(c("CometFeedUnitShouldPropagateErrorContext").Provider,{value:!0,children:i.jsx(c("CometFeedUnitOnFeedUnitErrorContext").Provider,{value:a?c("emptyFunction"):g,children:f})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFeedUnitLoadingContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({onFinishLoading:c("emptyFunction"),onStartLoading:c("emptyFunction")});g["default"]=b}),98);
__d("CometFeedUnitOnUnsupportedLoggerContext",["CometFeedUnitsTypedLoggerLite","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useRef,k=h.createContext(function(){return void 0});function a(a){var b=a.category,d=a.children,e=a.minGapType,f=a.position,g=a.postID,l=a.renderLocation,m=a.unitName,n=j(!1);a=i(function(a){if(!n.current){n.current=!0;c("CometFeedUnitsTypedLoggerLite").log({category:b,event:"unsupported",min_gap_type:e,position:f,post_id:g,related_ids:(a=a)!=null?a:null,render_location:l,unit_name:m})}},[b,e,f,g,l,m]);return h.jsx(k.Provider,{value:a,children:d})}a.displayName=a.name+" [from "+f.id+"]";g.CometFeedUnitOnUnsupportedLoggerContext=k;g.CometFeedUnitOnUnsupportedLoggerContextProvider=a}),98);
__d("CometFeedUnitSetDebugInfoContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("CometOffscreenScrollCompensator.react",["cr:10000","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");e=(c=b("cr:10000"))!=null?c:a.Fragment;g["default"]=e}),98);
__d("CometFeedUnit.react",["ActorHovercardContext","CometErrorProjectContext","CometFeedBrandSafetyContext","CometFeedUnitCard.react","CometFeedUnitContainerSection.react","CometFeedUnitErrorBoundary.react","CometFeedUnitLoadingContext","CometFeedUnitLoggingContext","CometFeedUnitOnUnsupportedLoggerContext","CometFeedUnitPostRenderingLoggersContext","CometFeedUnitQueryVariablesContext","CometFeedUnitSetDebugInfoContext","CometFeedUnitSetStatusContext","CometFeedUnit_feedUnit.graphql","CometFeedUnit_newsFeedEdge.graphql","CometFeedUnit_trackableFeedUnit.graphql","CometHovercardGroupContext","CometOffscreenScrollCompensator.react","CometProfiler.react","CometRelay","FBLogger","FocusRegion.react","HiddenSubtreePassiveContext","InteractionTracing","RecoverableViolationWithComponentStack.react","cr:12345","cr:1326","cr:1829844","cr:3094","deferredLoadComponent","focusScopeQueries","gkx","joinClasses","react","requireDeferred","unrecoverableViolation","useActorHovercardContext","useMergeRefs","usePostRenderingLogger","useStoryViewabilityLogger","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=d("react");e=d("react");var l=e.useCallback,m=e.useContext,n=e.useEffect,o=e.useLayoutEffect,p=e.useMemo,q=e.useRef,r=e.useState,s=(e=b("cr:3094"))!=null?e:k.Fragment,t=c("deferredLoadComponent")(c("requireDeferred")("CometFeedUnitLoadingIndicatorMask.react").__setRef("CometFeedUnit.react")),u=window.atob&&window.atob("c3BvbnNvcmVkX2Fk"),v=h!==void 0?h:h=b("CometFeedUnit_feedUnit.graphql"),w=i!==void 0?i:i=b("CometFeedUnit_trackableFeedUnit.graphql"),x=j!==void 0?j:j=b("CometFeedUnit_newsFeedEdge.graphql"),y={event_name:"ad_validate_image",event_sub_type:"feed_unit_full_impression",is_cta_shown:null},z=[5,8],A=c("gkx")("4319")?[d("focusScopeQueries").focusableScopeQuery,d("focusScopeQueries").headerAndSpinnerFocusScopeQuery]:null;function B(a){var b=a.children,d=a.debuggingInfoLoggers,e=a.focusableRef,f=a.loggingRef,g=a.visibilityObserverRef;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","debuggingInfoLoggers","focusableRef","loggingRef","visibilityObserverRef"]);e=c("useMergeRefs")(e,g,f);return k.jsxs("div",babelHelpers["extends"]({},a,{ref:e,children:[d,b]}))}B.displayName=B.name+" [from "+f.id+"]";function a(a){var e,f,g=a.category,h=a.minGapType,i=a.onError,j=a.position,C=a.variables;a=babelHelpers.objectWithoutPropertiesLoose(a,["category","minGapType","onError","position","variables"]);var D=d("CometRelay").useFragment(v,a.feedUnit);if(D==null)throw c("unrecoverableViolation")("Relay fragment feedUnit cannot be null/undefined in CometFeedUnit","comet_feed");var E=d("CometRelay").useFragment(w,D),F=E.client_view_config,G=E.trackingdata;E=E.viewability_config;var H=d("CometRelay").useFragment(x,a.newsFeedEdge);G=(G=G)!=null?G:{};G=G.id;var I=C.renderLocation,J=r(!1),aa=J[0],K=J[1];J=p(function(){return{onFinishLoading:function(){return K(!1)},onStartLoading:function(){return K(!0)}}},[]);var L=(e=D.feedback)==null?void 0:e.associated_group;e=L==null?void 0:L.context_actor_hovercard;var M=c("useActorHovercardContext")();e=(D==null?void 0:D.is_story_civic)===!0?"CIVIC_POST":(e=e)!=null?e:M;M=p(function(){var a;return{groupID:(a=L==null?void 0:L.id)!=null?a:void 0}},[L==null?void 0:L.id]);var N=m(d("CometFeedUnitSetStatusContext").CometFeedUnitSetStatusContext),O=m(c("CometFeedBrandSafetyContext"));if(c("gkx")("8050")&&O){O=O();O=O.feedUnitRegistry;var P=H==null?void 0:H.deduplication_key;if(P!=null){O[P]={brsContentLabel:H==null?void 0:H.brs_content_label,brsFilterSetting:D==null?void 0:(O=D.sponsored_data)==null?void 0:O.brs_filter_setting,tracking:G,unitType:D.__typename}}else a.newsFeedEdge!=null&&c("FBLogger")("comet_feed_unit").mustfix("NewsFeedEdge deduplicationKey %s is nullish, even though newsFeedEdge prop was provided. FeedUnit id: %s",P,D.id)}var Q=q(!1),R=m(d("CometFeedUnitOnUnsupportedLoggerContext").CometFeedUnitOnUnsupportedLoggerContext);H=q(null);o(function(){j===0&&Q.current===!1&&c("InteractionTracing").getPendingInteractions().forEach(function(a){a.addMarkerPoint("FirstFeedUnitMount","AppTiming")}),Q.current=!0},[j]);n(function(){return N("rendered")},[N]);O=l(function(){c("InteractionTracing").getPendingInteractions().forEach(function(a){a.addAnnotationInt("unsupportedFeedUnit",1)}),R(),N("error")},[R,N]);var S=m(c("CometFeedUnitSetDebugInfoContext")),T=D.debug_info,U=D.id,V=q(!1),W=m(c("HiddenSubtreePassiveContext")),X=l(function(){if(!W.getCurrentState().hiddenOrBackgrounded_FIXME){var a;S(j,{debugInfo:(a=T)!=null?a:null,storyId:(a=U)!=null?a:null,visible:V.current})}},[T,W,U,j,S]);P=l(function(){V.current=!1,X()},[X]);var Y=l(function(){V.current=!0,X()},[X]);P=c("useVisibilityObserver")({onHidden:P,onVisible:Y});Y={can_delay_log_impression:F==null?void 0:F.can_delay_log_impression,use_banzai_signal_imp:F==null?void 0:F.use_banzai_signal_imp,use_banzai_vital_imp:F==null?void 0:F.use_banzai_vital_imp};F=(F=D.sponsored_data)==null?void 0:F.client_token;Y=c("useStoryViewabilityLogger")({clientToken:F,clientViewConfig:Y,encryptedTracking:G,position:j,viewabilityConfig:(F=E)!=null?F:z});G=Y.debuggingInfoLoggers;E=Y.ref;n(function(){return X()},[X]);F=a["data-testid"];a=c("gkx")("1151060")&&(D==null?void 0:(Y=D.sponsored_data)==null?void 0:Y.ad_id)!=null;F=p(function(){var a;return{position:j,renderLocation:(a=I)!=null?a:null}},[j,I]);var Z=(Y=D.sponsored_data)==null?void 0:Y.post_rendering_loggers;Y=p(function(){var a;return{ad_id:(a=D.sponsored_data)==null?void 0:a.ad_id,client_token:(a=D.sponsored_data)==null?void 0:a.client_token,post_rendering_logger_from_context:Z}},[(Y=D.sponsored_data)==null?void 0:Y.ad_id,(Y=D.sponsored_data)==null?void 0:Y.client_token,Z]);f=l(function(){var a;return{ad_client_token:(a=D.sponsored_data)==null?void 0:a.client_token,ad_id:(a=D.sponsored_data)==null?void 0:a.ad_id,event_name:y.event_name,event_sub_type:y.event_sub_type}},[(f=D.sponsored_data)==null?void 0:f.ad_id,(f=D.sponsored_data)==null?void 0:f.client_token]);c("usePostRenderingLogger")(f,Z);f=j==null?k.jsx(c("RecoverableViolationWithComponentStack.react"),{errorMessage:"position is null or undefined for min gap type = "+((f=h)!=null?f:"UNKNOWN"),projectName:"comet_feed"}):null;var $=D.sponsored_data?"comet-feed-sponsored-story":null;$=k.jsxs(k.Fragment,{children:[f,k.jsx(c("CometErrorProjectContext").Provider,{value:"comet_feed",children:k.jsx(c("CometFeedUnitLoggingContext").Provider,{value:F,children:k.jsx(c("CometFeedUnitQueryVariablesContext").Provider,{value:C,children:k.jsx(c("CometFeedUnitLoadingContext").Provider,{value:J,children:k.jsx(c("CometFeedUnitPostRenderingLoggersContext").Provider,{value:Y,children:k.jsx(s,{children:k.jsx(c("CometOffscreenScrollCompensator.react"),{children:k.jsx(c("CometProfiler.react"),{id:"CometFeedUnit_"+j,children:k.jsx(d("FocusRegion.react").FocusRegion,{id:"CometFeedUnit_"+j,recoverFocusQuery:A,children:k.jsx("div",{className:c("joinClasses")("x1yztbdb x1n2onr6 xh8yej3 x1ja2u2z",a?u:""),"data-testid":void 0,children:k.jsx(c("CometFeedUnitCard.react"),{feedUnit:D,position:j,children:k.jsxs(B,{"data-testid":void 0,debuggingInfoLoggers:G,focusableRef:H,loggingRef:E,visibilityObserverRef:P,children:[b("cr:1326")?k.jsx(b("cr:1326"),{children:k.jsx(c("CometFeedUnitContainerSection.react"),{feedUnit:D,onUnsupported:O,position:j,variables:C})}):k.jsx(c("CometFeedUnitContainerSection.react"),{feedUnit:D,onUnsupported:O,position:j,variables:C}),aa?k.jsx(t,{}):null]})})})})})})})})})})})})]});if(b("cr:1829844")!=null&&b("cr:12345")!=null){$=k.jsx(b("cr:1829844"),{metadata:{type:b("cr:12345").FEED_OBJECT_ID,value:(f=U)!=null?f:""},name:"feed_unit",children:$})}return k.jsx(c("CometFeedUnitErrorBoundary.react"),{category:g,feedUnit:D,minGapType:h,onError:i,position:j,renderLocation:I,unitTypename:D.__typename,children:k.jsx(c("ActorHovercardContext").Provider,{value:e,children:L!=null?k.jsx(c("CometHovercardGroupContext").Provider,{value:M,children:$}):$})})}a.displayName=a.name+" [from "+f.id+"]";e=k.memo(a);g["default"]=e}),98);
__d("CometFeedUnitDebugInfoState",[],(function(a,b,c,d,e,f){"use strict";var g={};function a(a,b,c){g[a]==null&&(g[a]=[]),g[a][b]=c}function b(a){g[a]=[]}function c(){var a={};Object.keys(g).forEach(function(b){var c=g[b].map(function(a,b){return a.visible?babelHelpers["extends"]({},a,{position:b}):null}).filter(Boolean);a[b]={visibleUnits:c,allUnits:g[b]}});return a}f.addFeedUnitDebugInfo=a;f.clearFeedUnitInfo=b;f.getStateSnapshot=c}),66);
__d("cometFeedUnitID",[],(function(a,b,c,d,e,f){"use strict";function a(a){return"CometFeedUnit_"+a}f["default"]=a}),66);
__d("useCometFeedKeyCommands",["CometFeedUnitDebugInfoState","FocusRegion.react","GHLAriaLabelTracker","cometFeedUnitID","cometGetKeyCommandConfig","emptyFunction","react","scrollTo","useLayerKeyCommands"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useMemo,j=b.useState,k=60+16,l=function(a,b){return b.role==="article"};function m(a,b,e,f){c("GHLAriaLabelTracker").set();a=d("FocusRegion.react").focusRegionById(c("cometFeedUnitID")(a),l,!0);var g=document.documentElement;if(a!=null&&g!=null){g=a.getBoundingClientRect();g=g.top+window.pageYOffset-k-((a=b)!=null?a:0);c("scrollTo")({behavior:"smooth",onScrollComplete:f,onScrollStart:e,top:g});return!0}return!1}function n(a,b,c,d){var e=document.activeElement;e!=null&&(e.blur(),window.requestAnimationFrame(function(){m(a,b,c,d)}))}function a(a,b,e,f,g){f===void 0&&(f=c("emptyFunction"));g===void 0&&(g=c("emptyFunction"));var k=j(-1),l=k[0],o=k[1],p=h(function(a){if(b==null)return l;var c=d("CometFeedUnitDebugInfoState").getStateSnapshot();c=c[b];if(c==null)return l;c=c.visibleUnits;if(c.some(function(a){return a.visible&&a.position===l}))return l;a=a==="forward"?c[0]:c[c.length-1];c=a==null?void 0:a.position;if(c===0)return-1;else{return(a=c)!=null?a:-1}},[l,b]),q=h(function(){var b=p("forward");if(b<a-1){var c=b+1;m(c,e,f,g)&&o(c)}else n(b,e,f,g)},[p,g,f,a,e]),r=h(function(){var a=p("backward");if(a>0){var b=a-1;m(b,e,f,g)&&o(b)}else n(a,e,f,g)},[p,g,f,e]);k=i(function(){return[d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig("newsfeed","scrollNext",q),d("cometGetKeyCommandConfig").getCometAndGeminiKeyCommandConfig("newsfeed","scrollPrevious",r)]},[q,r]);c("useLayerKeyCommands")(k);return l}g["default"]=a}),98);
__d("ProfileCometTimelineError.react",["fbt","NullStateGeneral","TetraButton.react","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx(c("TetraNullState.react"),{action:i.jsx(c("TetraButton.react"),{label:h._("Pagina opnieuw laden"),onPress:function(){return window.location.reload(!0)},padding:"wide",size:"large"}),body:h._("Dit kan komen door een technische fout waarvoor we al aan een oplossing werken. Laad de pagina opnieuw."),headline:h._("Fout bij laden berichten"),icon:c("NullStateGeneral")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);