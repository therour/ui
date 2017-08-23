<!DOCTYPE html>
<html>
<head>
    <title>@yield('site.title', "Welcome Home") | {{ config('app.name') }}</title>

    <meta charset="UTF-8"/>
    <meta http-equiv="x-ua-compatible" content="IE=edge, chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>

    <link rel="stylesheet" type="text/css" href="{{ asset('dist/all.css') }}"/>

    @stack('head')
    @stack('style')

</head>

<body id="@yield('page.id')">

@yield('body')

<script type="text/javascript" src="{{ asset('dist/all.js') }}"></script>

@stack('body')
@stack('script')

</body>
</html>
