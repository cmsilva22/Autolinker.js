Ext.data.JsonP.Autolinker_match_Url({"tagname":"class","name":"Autolinker.match.Url","autodetected":{},"files":[{"filename":"Url.js","href":"Url2.html#Autolinker-match-Url"}],"extends":"Autolinker.match.Match","members":[{"name":"matchedText","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-matchedText","meta":{"required":true}},{"name":"offset","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-offset","meta":{"required":true}},{"name":"protocolRelativeMatch","tagname":"cfg","owner":"Autolinker.match.Url","id":"cfg-protocolRelativeMatch","meta":{"required":true}},{"name":"protocolUrlMatch","tagname":"cfg","owner":"Autolinker.match.Url","id":"cfg-protocolUrlMatch","meta":{"required":true}},{"name":"stripPrefix","tagname":"cfg","owner":"Autolinker.match.Url","id":"cfg-stripPrefix","meta":{"required":true}},{"name":"stripTrailingSlash","tagname":"cfg","owner":"Autolinker.match.Url","id":"cfg-stripTrailingSlash","meta":{"required":true}},{"name":"tagBuilder","tagname":"cfg","owner":"Autolinker.match.Match","id":"cfg-tagBuilder","meta":{"required":true}},{"name":"url","tagname":"cfg","owner":"Autolinker.match.Url","id":"cfg-url","meta":{"required":true}},{"name":"urlMatchType","tagname":"cfg","owner":"Autolinker.match.Url","id":"cfg-urlMatchType","meta":{"required":true}},{"name":"protocolPrepended","tagname":"property","owner":"Autolinker.match.Url","id":"property-protocolPrepended","meta":{"private":true}},{"name":"protocolRelativeRegex","tagname":"property","owner":"Autolinker.match.Url","id":"property-protocolRelativeRegex","meta":{"private":true}},{"name":"schemePrefixRegex","tagname":"property","owner":"Autolinker.match.Url","id":"property-schemePrefixRegex","meta":{"private":true}},{"name":"wwwPrefixRegex","tagname":"property","owner":"Autolinker.match.Url","id":"property-wwwPrefixRegex","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.match.Url","id":"method-constructor","meta":{}},{"name":"buildTag","tagname":"method","owner":"Autolinker.match.Match","id":"method-buildTag","meta":{}},{"name":"getAnchorHref","tagname":"method","owner":"Autolinker.match.Url","id":"method-getAnchorHref","meta":{}},{"name":"getAnchorText","tagname":"method","owner":"Autolinker.match.Url","id":"method-getAnchorText","meta":{}},{"name":"getCssClassSuffixes","tagname":"method","owner":"Autolinker.match.Match","id":"method-getCssClassSuffixes","meta":{}},{"name":"getMatchedText","tagname":"method","owner":"Autolinker.match.Match","id":"method-getMatchedText","meta":{}},{"name":"getOffset","tagname":"method","owner":"Autolinker.match.Match","id":"method-getOffset","meta":{}},{"name":"getType","tagname":"method","owner":"Autolinker.match.Url","id":"method-getType","meta":{}},{"name":"getUrl","tagname":"method","owner":"Autolinker.match.Url","id":"method-getUrl","meta":{}},{"name":"getUrlMatchType","tagname":"method","owner":"Autolinker.match.Url","id":"method-getUrlMatchType","meta":{}},{"name":"removeTrailingSlash","tagname":"method","owner":"Autolinker.match.Url","id":"method-removeTrailingSlash","meta":{"private":true}},{"name":"setOffset","tagname":"method","owner":"Autolinker.match.Match","id":"method-setOffset","meta":{}},{"name":"stripProtocolRelativePrefix","tagname":"method","owner":"Autolinker.match.Url","id":"method-stripProtocolRelativePrefix","meta":{"private":true}},{"name":"stripSchemePrefix","tagname":"method","owner":"Autolinker.match.Url","id":"method-stripSchemePrefix","meta":{"private":true}},{"name":"stripWwwPrefix","tagname":"method","owner":"Autolinker.match.Url","id":"method-stripWwwPrefix","meta":{"private":true}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.match.Url","short_doc":"Represents a Url match found in an input string which should be Autolinked. ...","component":false,"superclasses":["Autolinker.match.Match"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='docClass'>Autolinker.match.Match</a><div class='subclass '><strong>Autolinker.match.Url</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Url2.html#Autolinker-match-Url' target='_blank'>Url.js</a></div></pre><div class='doc-contents'><p>Represents a Url match found in an input string which should be Autolinked.</p>\n\n<p>See this class's superclass (<a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a>) for more details.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-matchedText' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-cfg-matchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-matchedText' class='name expandable'>matchedText</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The original text that was matched by the <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a>.</p>\n</div><div class='long'><p>The original text that was matched by the <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a>.</p>\n</div></div></div><div id='cfg-offset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-cfg-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-offset' class='name expandable'>offset</a> : Number<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The offset of where the match was made in the input string.</p>\n</div><div class='long'><p>The offset of where the match was made in the input string.</p>\n</div></div></div><div id='cfg-protocolRelativeMatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-cfg-protocolRelativeMatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-cfg-protocolRelativeMatch' class='name expandable'>protocolRelativeMatch</a> : Boolean<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>true if the URL is a protocol-relative match. ...</div><div class='long'><p><code>true</code> if the URL is a protocol-relative match. A protocol-relative match\nis a URL that starts with '//', and will be either http:// or https://\nbased on the protocol that the site is loaded under.</p>\n</div></div></div><div id='cfg-protocolUrlMatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-cfg-protocolUrlMatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-cfg-protocolUrlMatch' class='name expandable'>protocolUrlMatch</a> : Boolean<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>true if the URL is a match which already has a protocol (i.e. ...</div><div class='long'><p><code>true</code> if the URL is a match which already has a protocol (i.e.\n'http://'), <code>false</code> if the match was from a 'www' or known TLD match.</p>\n</div></div></div><div id='cfg-stripPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-cfg-stripPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-cfg-stripPrefix' class='name expandable'>stripPrefix</a> : Object<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The Object form of <a href=\"#!/api/Autolinker-cfg-stripPrefix\" rel=\"Autolinker-cfg-stripPrefix\" class=\"docClass\">Autolinker.stripPrefix</a>.</p>\n</div><div class='long'><p>The Object form of <a href=\"#!/api/Autolinker-cfg-stripPrefix\" rel=\"Autolinker-cfg-stripPrefix\" class=\"docClass\">Autolinker.stripPrefix</a>.</p>\n</div></div></div><div id='cfg-stripTrailingSlash' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-cfg-stripTrailingSlash' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-cfg-stripTrailingSlash' class='name expandable'>stripTrailingSlash</a> : Boolean<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>true to remove the trailing slash from URL matches, false to keep\n the trailing slash. ...</div><div class='long'><p><code>true</code> to remove the trailing slash from URL matches, <code>false</code> to keep\n the trailing slash.</p>\n\n<p> Example when <code>true</code>: <code>http://google.com/</code> will be displayed as\n <code>http://google.com</code>.</p>\n</div></div></div><div id='cfg-tagBuilder' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-cfg-tagBuilder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-cfg-tagBuilder' class='name expandable'>tagBuilder</a> : <a href=\"#!/api/Autolinker.AnchorTagBuilder\" rel=\"Autolinker.AnchorTagBuilder\" class=\"docClass\">Autolinker.AnchorTagBuilder</a><span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>Reference to the AnchorTagBuilder instance to use to generate an anchor\ntag for the Match.</p>\n</div><div class='long'><p>Reference to the AnchorTagBuilder instance to use to generate an anchor\ntag for the Match.</p>\n</div></div></div><div id='cfg-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-cfg-url' class='name expandable'>url</a> : String<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>The url that was matched.</p>\n</div><div class='long'><p>The url that was matched.</p>\n</div></div></div><div id='cfg-urlMatchType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-cfg-urlMatchType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-cfg-urlMatchType' class='name expandable'>urlMatchType</a> : \"scheme\"/\"www\"/\"tld\"<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>The type of URL match that this class represents. ...</div><div class='long'><p>The type of URL match that this class represents. This helps to determine\nif the match was made in the original text with a prefixed scheme (ex:\n'http://www.google.com'), a prefixed 'www' (ex: 'www.google.com'), or\nwas matched by a known top-level domain (ex: 'google.com').</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-protocolPrepended' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-property-protocolPrepended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-property-protocolPrepended' class='name expandable'>protocolPrepended</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Will be set to true if the 'http://' protocol has been prepended to the url (because the\nurl did not have a protocol) ...</div><div class='long'><p>Will be set to <code>true</code> if the 'http://' protocol has been prepended to the <a href=\"#!/api/Autolinker.match.Url-cfg-url\" rel=\"Autolinker.match.Url-cfg-url\" class=\"docClass\">url</a> (because the\n<a href=\"#!/api/Autolinker.match.Url-cfg-url\" rel=\"Autolinker.match.Url-cfg-url\" class=\"docClass\">url</a> did not have a protocol)</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-protocolRelativeRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-property-protocolRelativeRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-property-protocolRelativeRegex' class='name expandable'>protocolRelativeRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression used to remove the protocol-relative '//' from the url string, for purposes\nof getAnchorText. ...</div><div class='long'><p>The regular expression used to remove the protocol-relative '//' from the <a href=\"#!/api/Autolinker.match.Url-cfg-url\" rel=\"Autolinker.match.Url-cfg-url\" class=\"docClass\">url</a> string, for purposes\nof <a href=\"#!/api/Autolinker.match.Url-method-getAnchorText\" rel=\"Autolinker.match.Url-method-getAnchorText\" class=\"docClass\">getAnchorText</a>. A protocol-relative URL is, for example, \"//yahoo.com\"</p>\n<p>Defaults to: <code>/^\\/\\//</code></p></div></div></div><div id='property-schemePrefixRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-property-schemePrefixRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-property-schemePrefixRegex' class='name expandable'>schemePrefixRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>A regular expression used to remove the 'http://' or 'https://' from\nURLs. ...</div><div class='long'><p>A regular expression used to remove the 'http://' or 'https://' from\nURLs.</p>\n<p>Defaults to: <code>/^(https?:\\/\\/)?/i</code></p></div></div></div><div id='property-wwwPrefixRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-property-wwwPrefixRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-property-wwwPrefixRegex' class='name expandable'>wwwPrefixRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>A regular expression used to remove the 'www.' from URLs. ...</div><div class='long'><p>A regular expression used to remove the 'www.' from URLs.</p>\n<p>Defaults to: <code>/^(https?:\\/\\/)?(www\\.)?/i</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.match.Url-method-constructor' class='name expandable'>Autolinker.match.Url</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.match.Url\" rel=\"Autolinker.match.Url\" class=\"docClass\">Autolinker.match.Url</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Match\n  instance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.match.Url\" rel=\"Autolinker.match.Url\" class=\"docClass\">Autolinker.match.Url</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-constructor\" rel=\"Autolinker.match.Match-method-constructor\" class=\"docClass\">Autolinker.match.Match.constructor</a></p></div></div></div><div id='method-buildTag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-buildTag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-buildTag' class='name expandable'>buildTag</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds and returns an Autolinker.HtmlTag instance based on the\nMatch. ...</div><div class='long'><p>Builds and returns an <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a> instance based on the\nMatch.</p>\n\n<p>This can be used to easily generate anchor tags from matches, and either\nreturn their HTML string, or modify them before doing so.</p>\n\n<p>Example Usage:</p>\n\n<pre><code>var tag = match.buildTag();\ntag.addClass( 'cordova-link' );\ntag.setAttr( 'target', '_system' );\n\ntag.toAnchorString();  // &lt;a href=\"http://google.com\" class=\"cordova-link\" target=\"_system\"&gt;Google&lt;/a&gt;\n</code></pre>\n</div></div></div><div id='method-getAnchorHref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-method-getAnchorHref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-getAnchorHref' class='name expandable'>getAnchorHref</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the anchor href that should be generated for the match. ...</div><div class='long'><p>Returns the anchor href that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getAnchorHref\" rel=\"Autolinker.match.Match-method-getAnchorHref\" class=\"docClass\">Autolinker.match.Match.getAnchorHref</a></p></div></div></div><div id='method-getAnchorText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-method-getAnchorText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-getAnchorText' class='name expandable'>getAnchorText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the anchor text that should be generated for the match. ...</div><div class='long'><p>Returns the anchor text that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getAnchorText\" rel=\"Autolinker.match.Match-method-getAnchorText\" class=\"docClass\">Autolinker.match.Match.getAnchorText</a></p></div></div></div><div id='method-getCssClassSuffixes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-getCssClassSuffixes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getCssClassSuffixes' class='name expandable'>getCssClassSuffixes</a>( <span class='pre'></span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the CSS class suffix(es) for this match. ...</div><div class='long'><p>Returns the CSS class suffix(es) for this match.</p>\n\n<p>A CSS class suffix is appended to the <a href=\"#!/api/Autolinker-cfg-className\" rel=\"Autolinker-cfg-className\" class=\"docClass\">Autolinker.className</a> in\nthe <a href=\"#!/api/Autolinker.AnchorTagBuilder\" rel=\"Autolinker.AnchorTagBuilder\" class=\"docClass\">Autolinker.AnchorTagBuilder</a> when a match is translated into\nan anchor tag.</p>\n\n<p>For example, if <a href=\"#!/api/Autolinker-cfg-className\" rel=\"Autolinker-cfg-className\" class=\"docClass\">Autolinker.className</a> was configured as 'myLink',\nand this method returns <code>[ 'url' ]</code>, the final class name of the element\nwill become: 'myLink myLink-url'.</p>\n\n<p>The match may provide multiple CSS class suffixes to be appended to the\n<a href=\"#!/api/Autolinker-cfg-className\" rel=\"Autolinker-cfg-className\" class=\"docClass\">Autolinker.className</a> in order to facilitate better styling\noptions for different match criteria. See <a href=\"#!/api/Autolinker.match.Mention\" rel=\"Autolinker.match.Mention\" class=\"docClass\">Autolinker.match.Mention</a>\nfor an example.</p>\n\n<p>By default, this method returns a single array with the match's\n<a href=\"#!/api/Autolinker.match.Match-method-getType\" rel=\"Autolinker.match.Match-method-getType\" class=\"docClass\">type</a> name, but may be overridden by subclasses.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMatchedText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-getMatchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getMatchedText' class='name expandable'>getMatchedText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the original text that was matched. ...</div><div class='long'><p>Returns the original text that was matched.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-getOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getOffset' class='name expandable'>getOffset</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the offset of where the match was made in the input string. ...</div><div class='long'><p>Returns the offset of where the match was made in the input string. This\nis the 0-based index of the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a string name for the type of match that this class represents. ...</div><div class='long'><p>Returns a string name for the type of match that this class represents.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getType\" rel=\"Autolinker.match.Match-method-getType\" class=\"docClass\">Autolinker.match.Match.getType</a></p></div></div></div><div id='method-getUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-method-getUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-getUrl' class='name expandable'>getUrl</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the url that was matched, assuming the protocol to be 'http://' if the original\nmatch was missing a protocol. ...</div><div class='long'><p>Returns the url that was matched, assuming the protocol to be 'http://' if the original\nmatch was missing a protocol.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUrlMatchType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-method-getUrlMatchType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-getUrlMatchType' class='name expandable'>getUrlMatchType</a>( <span class='pre'></span> ) : \"scheme\"/\"www\"/\"tld\"<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a string name for the type of URL match that this class\nrepresents. ...</div><div class='long'><p>Returns a string name for the type of URL match that this class\nrepresents.</p>\n\n<p>This helps to determine if the match was made in the original text with a\nprefixed scheme (ex: 'http://www.google.com'), a prefixed 'www' (ex:\n'www.google.com'), or was matched by a known top-level domain (ex:\n'google.com').</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>\"scheme\"/\"www\"/\"tld\"</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeTrailingSlash' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-method-removeTrailingSlash' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-removeTrailingSlash' class='name expandable'>removeTrailingSlash</a>( <span class='pre'>anchorText</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Removes any trailing slash from the given anchorText, in preparation for the text to be displayed. ...</div><div class='long'><p>Removes any trailing slash from the given <code>anchorText</code>, in preparation for the text to be displayed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anchorText</span> : String<div class='sub-desc'><p>The text of the anchor that is being generated, for which to remove any trailing\n  slash ('/') that may exist.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The <code>anchorText</code>, with the trailing slash removed.</p>\n</div></li></ul></div></div></div><div id='method-setOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-setOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-setOffset' class='name expandable'>setOffset</a>( <span class='pre'>offset</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the offset of where the match was made in the input string. ...</div><div class='long'><p>Sets the <a href=\"#!/api/Autolinker.match.Match-cfg-offset\" rel=\"Autolinker.match.Match-cfg-offset\" class=\"docClass\">offset</a> of where the match was made in the input string.</p>\n\n<p>A <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a> will be fed only HTML text nodes,\nand will therefore set an original offset that is relative to the HTML\ntext node itself. However, we want this offset to be relative to the full\nHTML input string, and thus if using <a href=\"#!/api/Autolinker-method-parse\" rel=\"Autolinker-method-parse\" class=\"docClass\">Autolinker.parse</a> (rather\nthan calling a <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a> directly), then this\noffset is corrected after the Matcher itself has done its job.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>offset</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stripProtocolRelativePrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-method-stripProtocolRelativePrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-stripProtocolRelativePrefix' class='name expandable'>stripProtocolRelativePrefix</a>( <span class='pre'>text</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Strips any protocol-relative '//' from the anchor text. ...</div><div class='long'><p>Strips any protocol-relative '//' from the anchor text.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The text of the anchor that is being generated, for which to strip off the\n  protocol-relative prefix (such as stripping off \"//\")</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The <code>anchorText</code>, with the protocol-relative prefix stripped.</p>\n</div></li></ul></div></div></div><div id='method-stripSchemePrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-method-stripSchemePrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-stripSchemePrefix' class='name expandable'>stripSchemePrefix</a>( <span class='pre'>url</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Strips the scheme prefix (such as \"http://\" or \"https://\") from the given\nurl. ...</div><div class='long'><p>Strips the scheme prefix (such as \"http://\" or \"https://\") from the given\n<code>url</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The text of the anchor that is being generated, for\n  which to strip off the url scheme.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The <code>url</code>, with the scheme stripped.</p>\n</div></li></ul></div></div></div><div id='method-stripWwwPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Url'>Autolinker.match.Url</span><br/><a href='source/Url2.html#Autolinker-match-Url-method-stripWwwPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Url-method-stripWwwPrefix' class='name expandable'>stripWwwPrefix</a>( <span class='pre'>url</span> ) : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Strips the 'www' prefix from the given url. ...</div><div class='long'><p>Strips the 'www' prefix from the given <code>url</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The text of the anchor that is being generated, for\n  which to strip off the 'www' if it exists.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The <code>url</code>, with the 'www' stripped.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});