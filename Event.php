<?php

namespace Plugin\SplitColorbox;

class Event
{
    public static function ipBeforeController()
    {
        $style = ipGetOption('SplitColorbox.style', 1);
        ipAddCss('assets/theme' . $style . '/colorbox.css');
        ipAddJs('assets/colorbox/jquery.colorbox-min.js');
        ipAddJs('assets/colorboxInit.js');
    }
}
