<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/css/app.css">
    <title>Dynamic</title>
</head>

<body>
    <h1>Dynamic data transport</h1>
    <h4>between the front-end and the back-end</h4>
    <div id="root"></div>
    <script>
        const token = '{{ csrf_token() }}'
    </script>
    <script src="/js/app.js"></script>
</body>

</html>
