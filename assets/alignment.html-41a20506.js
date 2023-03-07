import{_ as e,M as t,p as i,q as l,R as s,t as n,N as p,a1 as o}from"./framework-e03faf0e.js";const r={},c=s("h1",{id:"alignment",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#alignment","aria-hidden":"true"},"#"),n(" Alignment")],-1),u={href:"https://www.php.net/manual/en/function.var-export.php",target:"_blank",rel:"noopener noreferrer"},d=o(`<p>Your file example:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>// auth.php
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | Authentication Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application&#39;s requirements.
    |
    */</span>
    <span class="token string single-quoted-string">&#39;failed&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;These credentials do not match our records 123456.&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;throttle&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Too many login attempts. Please try again in :seconds seconds.&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;foo&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bar&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>An updated file:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;failed&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;These credentials do not match our records.&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;foo&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bar&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;throttle&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Too many login attempts. Please try again in :seconds seconds.&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and example of <code>validation.php</code> file:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>// your file:
<span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */</span>
    <span class="token string single-quoted-string">&#39;accepted&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;The :attribute must be accepted.&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;active_url&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;The :attribute is not a valid URL.&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// many rules</span>

    <span class="token string single-quoted-string">&#39;uuid&#39;</span>             <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;The :attribute must be a valid UUID.&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention &quot;attribute.rule&quot; to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */</span>
    <span class="token string single-quoted-string">&#39;custom&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;required&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Custom message 1&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;string&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Custom message 2&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as &quot;E-Mail Address&quot; instead
    | of &quot;email&quot;. This simply helps us make our message more expressive.
    |
    */</span>
    <span class="token string single-quoted-string">&#39;attributes&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Foo&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;bar&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Bar&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;baz&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Baz&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Updated:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;accepted&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;The :attribute must be accepted.&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;active_url&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;The :attribute is not a valid URL.&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// many rules</span>

    <span class="token string single-quoted-string">&#39;uuid&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;The :attribute must be a valid UUID.&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;custom&#39;</span>     <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;required&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Custom message 1&#39;</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;string&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Custom message 2&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;attributes&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;bar&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Bar&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;baz&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Baz&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;email&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;E-Mail address&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;first_name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;First Name&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;last_name&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Last Name&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Name&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;username&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Nickname&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function g(v,m){const a=t("ExternalLinkIcon");return i(),l("div",null,[c,s("p",null,[n("When updating files, all comments from the final files are automatically deleted. Unfortunately, "),s("a",u,[n("var_export"),p(a)]),n(" does not know how to work with comments.")]),d])}const b=e(r,[["render",g],["__file","alignment.html.vue"]]);export{b as default};
