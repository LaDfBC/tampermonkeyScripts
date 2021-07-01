// ==UserScript==
// @name         ECS One-click server bounce
// @namespace    https://www.jaerapps.com
// @version      0.1
// @description  Adds a button that will redeploy the same version of the container that currently exists, to easily turn it off and on again.
// @author       Jaera Millhart
// @include      /https?:\/\/aws\.amazon\.com.*\/pull\/.*/
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    // This is the normal button we hit to deploy something in ECS
    const $existing_save_button = jQuery('.save-button?'); // Figure this out!

    // Adding our new redeploy button
    jQuery('<button id="run_redeploy">Redeploy Same Version</button>').insertBefore($existing_save_button);
    const $run-redeploy = jQuery('#run_redeploy');

    // Box that needs to be checked to enforce that the same version can be pushed again.
    const $force_push_checkbox = jQuery('.figure_out_this_box_name'); //TODO!

    //Alright, we have everything we need - let's define what happens when we click the button!
    $run_redeploy.on('click', function() {
        $force_push_checkbox.click();

        setTimeout(function() {
            $existing_save_button.click();
        }, 200);
    });
})();