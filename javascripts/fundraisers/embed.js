with (scope('Embed', 'Fundraiser')) {
  route('#fundraisers/:fundraiser_id/embed', function(fundraiser_id) {
    var fundraiser_iframe = '<iframe src="' + BountySource.api_host + 'user/fundraisers/' + fundraiser_id + '/embed" ' +
                            'style="border:0;width:238px;height:402px;overflow:hidden"></iframe>';
    var fundraiser_textarea = textarea({ style: 'color: #ccc; font-size: 100%; white-space:nowrap;', rows: 2, width: 100 }, fundraiser_iframe);


    var iframe_src = BountySource.api_host + "user/fundraisers/" + fundraiser_id + "/embed";

    render(
      fundraiser_textarea,

      br,

      iframe({
        src: iframe_src,
        style: 'width: 238px; height: 402px; overflow: hidden; border: 0;'
      })
    );
  });
}
