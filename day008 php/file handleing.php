<?php
echo "Day 8 | File Handeling <br>";

    echo "<b> reading the file </b> <br>";
    $filename = "tmp.txt";
    $file = fopen( $filename, "r" );

    if( $file == false ) {
        echo ( "Error in opening file" );
        exit();
    }

    $filesize = filesize( $filename );
    $filetext = fread( $file, $filesize );
    fclose( $file );

    echo ("File size : $filesize bytes" );
    echo ("<pre>$filetext</pre>" );
    


    echo "<p style='color:red'> writing to a file using php </p><br>";

    $fileW= fopen("test.txt", "w");
    if ($fileW == false){
        echo "eror in opeaning file";
        exit();
    }
    fwrite($fileW, "demo1: this is sample of writing to file using PHP.\nIts easy");
    fclose($fileW);
    
    $filename = "test.txt";
    $file = fopen($filename, "r");
    
    if($file ==false){
        echo "error in opeaning file";
        exit();
    }
    
    $filesize = filesize($filename);
    $filetext = fread($file , $filesize);
    
    echo "Reading the wrote file <br>";
    echo "$filetext";
?>
