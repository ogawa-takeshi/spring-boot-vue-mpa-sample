package sample.wijmo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/wijmo")
public class WijmoController {

	@GetMapping
	public String index() {
		return "wijmo/index";
	}

}
