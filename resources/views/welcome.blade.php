<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React Laravel SPA</title>
    <link rel="stylesheet" href="/css/app.css">
</head>

<body>
    <h1>Laravel React Spa</h1>
    <h2>Static data transfer between the front-end and the back-end</h2>
    <div id="example"></div>
    <script>
        const users = {{ Js::from($users) }}
    </script>
    <script src="/js/app.js"></script>
</body>

</html>
