(window.webpackJsonp = window.webpackJsonp || []).push([
	[11], {
		"+bJz": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		"+oNn": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("d/F/"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		"/8/R": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		"/Y2i": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("lPbr"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		0: function(l, n, u) {
			l.exports = u("zUnb")
		},
		1: function(l, n) {},
		10: function(l, n) {},
		11: function(l, n) {},
		12: function(l, n) {},
		"1HeJ": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		"1dSC": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("TGGJ"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		2: function(l, n) {},
		"22Tf": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("3+hJ"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		"2sep": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		3: function(l, n) {},
		"3+hJ": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		"36OV": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("WDer"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		4: function(l, n) {},
		"47AC": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return r
			}));
			var t = u("XNiG"),
				e = u("w1tV");
			class r {
				constructor() {
					this.onSubject = new t.a, this.changes = this.onSubject.asObservable().pipe(Object(e.a)()), this.start()
				}
				ngOnDestroy() {
					this.stop()
				}
				getStorage() {
					const l = [];
					for (let n = 0; n < localStorage.length; n++) l.push({
						key: localStorage.key(n),
						value: JSON.parse(localStorage.getItem(localStorage.key(n)))
					});
					return l
				}
				store(l, n) {
					localStorage.setItem(l, n), this.onSubject.next({
						key: l,
						value: n
					})
				}
				remove(l) {
					localStorage.removeItem(l), sessionStorage.removeItem(l), this.onSubject.next({
						key: l,
						value: null
					})
				}
				start() {
					window.addEventListener("storage", this.storageEventListener.bind(this))
				}
				storageEventListener(l) {
					if (l.storageArea === localStorage) {
						let u;
						try {
							u = JSON.parse(l.newValue)
						} catch (n) {
							u = l.newValue
						}
						this.onSubject.next({
							key: l.key,
							value: u
						})
					}
				}
				stop() {
					window.removeEventListener("storage", this.storageEventListener.bind(this)), this.onSubject.complete()
				}
				storeInSession(l, n) {
					sessionStorage.setItem(l, n), this.onSubject.next({
						key: l,
						value: n
					})
				}
				getFromSession(l) {
					return sessionStorage.getItem(l)
				}
			}
		},
		5: function(l, n) {},
		"5n0E": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("sm2b"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		6: function(l, n) {},
		"63Kk": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		"6Csp": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return r
			}));
			var t = u("2Vo4"),
				e = u("8Y7J");
			let r = (() => {
				class l {
					constructor() {
						this.dataSource = new t.a({}), this.data = this.dataSource.asObservable()
					}
					print(l, n) {
						console.log("print 2", n), this.dataSource.next({
							screen: l,
							data: JSON.parse(JSON.stringify(n))
						})
					}
				}
				return l.ngInjectableDef = e.Rb({
					factory: function() {
						return new l
					},
					token: l,
					providedIn: "root"
				}), l
			})()
		},
		7: function(l, n) {},
		"774T": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return r
			}));
			var t = u("mrSG"),
				e = u("wd/R");
			class r {
				constructor(l, n, u, e) {
					this.npsService = l, this.router = n, this.apiService = u, this.modalService = e, this.modalConfirmId = `survey-nps-confirm-${Date.now()}`, this.modalSurveyNPS = `survey-nps-view-${Date.now()}`, l.surveyInit.subscribe(l => t.a(this, void 0, void 0, (function*() {
						!0 === l ? !0 === (yield this.checkExpiryDate()) && (yield this.checkSurveyStatus(), this.closeSurveyWhenTimeout()) : this.disposeSurvey()
					})))
				}
				checkExpiryDate() {
					return t.a(this, void 0, void 0, (function*() {
						try {
							const l = yield this.apiService.getConfig("EFFECTIVE_TIME_NPS");
							if (!l) throw new TypeError("check_expiry_date_faild");
							if ("00" === l.code) {
								const [n] = l.values;
								if (n) {
									const [l, u] = n.value.split(/-/), t = e().diff(e(l, "DD/MM/YYYY"), "days"), r = e().diff(e(u, "DD/MM/YYYY"), "days");
									if (t >= 0 && r <= 0) return !0
								}
								return !1
							}
							return !1
						} catch (l) {
							return console.log(l), !1
						}
					}))
				}
				checkSurveyStatus() {
					return t.a(this, void 0, void 0, (function*() {
						try {
							const l = yield this.apiService.checkSurveyNPS();
							if (!l) throw new TypeError("check_survey_status_faild");
							if ("00" === l.code) switch (this.npsSource = l.url, l.status) {
								case "0":
								case "1":
									this.onShowConfirm()
							}
						} catch (l) {
							console.log(l)
						}
					}))
				}
				onShowConfirm() {
					jQuery(`#${this.modalConfirmId}`).modal({
						backdrop: "static",
						keyboard: !1
					})
				}
				onShowSurvey() {
					if (jQuery(`#${this.modalConfirmId}`).modal("hide"), !this.npsSource || 0 === this.npsSource.length) return this.modalService.error("Ch\u01b0a c\xf3 c\u1ea5u h\xecnh \u0111\u01b0\u1eddng d\u1eabn kh\u1ea3o s\xe1t");
					jQuery(`#${this.modalSurveyNPS}`).modal({
						backdrop: "static",
						keyboard: !1
					})
				}
				goBack() {
					this.router.navigate(["/"])
				}
				closeSurveyWhenTimeout() {
					try {
						this.timeNPSIframe = setInterval(() => {
							if (this.npsIframe = document.querySelector("iframe#vcb-survey-nps"), this.npsIframe) {
								const l = this.npsIframe.contentWindow.location.search;
								l && /[?&]timeout=1/.test(l) && this.disposeSurvey()
							}
						}, 1e3)
					} catch (l) {
						console.log(l)
					}
				}
				onRejectSurvey() {
					return t.a(this, void 0, void 0, (function*() {
						try {
							if (!(yield this.apiService.rejectSurveyNPS())) throw new TypeError("reject_survey_faild");
							this.disposeSurvey()
						} catch (l) {
							console.log(l)
						}
					}))
				}
				disposeSurvey() {
					this.npsSource = null, clearInterval(this.timeNPSIframe), jQuery(`#${this.modalConfirmId}`).modal("hide"), jQuery(`#${this.modalSurveyNPS}`).modal("hide")
				}
			}
		},
		8: function(l, n) {},
		"8nTM": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		9: function(l, n) {},
		"9OG/": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("R5Qd"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		"9vUh": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return o
			}));
			var t = u("iInd"),
				e = u("pLZG"),
				r = u("vkgz"),
				a = u("VXAP"),
				i = u("AytR"),
				s = u("oyXx"),
				c = u("tRjT");
			class o extends a.a {
				constructor(l, n, u, a, i, s, o, b) {
					super(l, n), this.storeService = l, this.translate = n, this.authenticationService = u, this.router = a, this.route = i, this.apiService = s, this.http = o, this.modalService = b, this.showMenu = !1, this.showBalance = !1, this.isVip = !0, this.isLoadedVIP = !1, this.avatarUrl = "", this.deleteAvatarSuccess = !1, this.imageChangedEvent = "", this.croppedImage = "", console.log("HomeComponent"), this.currentUser && ("done" === this.storeService.getFromSession(c.a.StoreKey.LOGIN_STATE) ? (this.checksum = encodeURIComponent(this.authenticationService.checksum(this.currentUser.user_name + this.currentUser.lastLogin)), this.router.url.startsWith("/info") || this.router.url.startsWith("/chuyentien") || this.router.url.startsWith("/thongtintaikhoan") || this.router.url.startsWith("/nap-tien") || this.router.url.startsWith("/thanhtoan") || this.router.url.startsWith("/ngansach") || this.router.url.startsWith("/tienguitructuyen") || this.router.url.startsWith("/tienich") || this.router.url.startsWith("/cong-cu-tinh-toan") || this.router.url.startsWith("/tindung") || this.router.url.startsWith("/caidat") || this.router.url.startsWith("/uu-dai") || this.router.navigate(["/info/" + this.checksum], {
						fragment: this.route.snapshot.fragment
					})) : this.router.navigate(["/login"])), a.events.pipe(Object(e.a)(l => l instanceof t.e), Object(r.a)(() => {
						if ($(window).width() < 789) {
							const l = $("#sidebar-trigger").prop("checked"),
								n = $("#sidebar-right-trigger").prop("checked");
							!0 === l && $("#sidebar-trigger").click(), !0 === n && $("#sidebar-right-trigger").click()
						} else !1 === $("#sidebar-left-close").prop("checked") && $("#sidebar-left-close").click();
						$("[data-tooltip]").tooltip("hide"), $("[data-tooltip-m]").tooltip("hide")
					})).subscribe()
				}
				ngOnInit() {
					this.isLoadedVIP = !1, "VIP" === this.currentUser.cusLevel ? (document.getElementById("theme").setAttribute("href", "assets/vip/css/vip.css"), this.isLoadedVIP = !0) : this.isLoadedVIP = !0, this.avatarUrl = this.currentUser.avatarUrl ? this.currentUser.avatarUrl : "", console.log("currentUser.avatarUrl", this.currentUser.avatarUrl), this.accountDetail = {}, this.initJS(), this.timeBackground()
				}
				timeBackground() {
					this.backgroundNumber = localStorage.getItem("backgroundNumber"), this.backgroundNumber || (this.backgroundNumber = "default")
				}
				initJS() {
					$(document).on("show.bs.modal", ".modal", (function(l) {
						const n = 1040 + 10 * $(".modal:visible").length;
						$(this).css("z-index", n), setTimeout((function() {
							$(".modal-backdrop").not(".modal-stack").css("z-index", n - 1).addClass("modal-stack")
						}), 0)
					})), $(window).width() < 1200 && $("#sidebar1").prop("checked", !0), $(document).ready((function() {
						$("[data-tooltip]").tooltip(), $(".sidebar-overlay").on("touchstart", (function(l) {
							$("#sidebar-trigger").prop("checked", !1).trigger("change"), l.preventDefault()
						})), $(".sidebar-overlay").on("touchstart", (function(l) {
							$("#sidebar-right-trigger").prop("checked", !1).trigger("change"), l.preventDefault()
						}))
					})), $(document).ready((function() {
						$(".ripple-radio").ripple({
							maxDiameter: "230%"
						}), $(".ripple").ripple({}), $(".ripple-100").ripple({
							maxDiameter: "100%",
							touchDelay: 150
						}), $(".prev").ripple(), $(window).width() < 1200 && $("#sidebar1").prop("checked", !0)
					})), $(document).ready((function() {
						$("[data-content]").on("change", (function() {
							$(this).closest("[data-accordion]").trigger("resize")
						})), $("[data-accordion]").accordion({
							transitionSpeed: 200
						}), $("[data-accordion]").trigger("resize"), $(".sticky-menu [data-accordion]").on("accordion.close", (function() {
							setTimeout((function() {
								$(window).trigger("resize")
							}), 10)
						})), $(".sticky-menu [data-accordion]").on("accordion.open", (function() {
							setTimeout((function() {
								$(window).trigger("resize")
							}), 10)
						})), $(".accordion-snap [data-accordion]").on("accordion.close", (function() {
							$(this).find("[data-control]").get(0).getBoundingClientRect().y < 0 && $("html,body").animate({
								scrollTop: $(this).offset().top - 0
							}, 200)
						}))
					})), $(document).ready((function() {
						var l, n;
						$(".modal--countdown").on("shown.bs.modal", (function() {
							$(".modal-countdown-txt").html("3"), l = setInterval((function() {
								n = $(".modal-countdown-txt").html(), $(".modal-countdown-txt").html(n - 1), 1 == n && $(".modal--countdown").modal("hide"), n <= 0 && (clearInterval(l), $(".modal-countdown-txt").html("3"))
							}), 1e3)
						})).on("hidden.bs.modal", (function() {
							$(".modal-countdown-txt").html("3"), clearInterval(l)
						}))
					}))
				}
				ngOnDestroy() {}
				logout() {
					console.log("AccountComponent logout ..."), this.authenticationService.sendlogout(), this.authenticationService.logout(""), this.router.navigate(["/login"])
				}
				loadAccountDetail() {
					this.apiService.getAccountDetail(this.currentUser.defaultAccount, "D").then(l => {
						this.accountDetail = l, this.accountDetail.availBalance = s.a.formatCurrencyString(this.accountDetail.accountCurr, this.accountDetail.availBalance), this.showBalance = !this.showBalance
					}).catch(l => {
						console.log("L\u1ea5y chi ti\u1ebft t\xe0i kho\u1ea3n m\u1eb7c \u0111\u1ecbnh l\u1ed7i:", l)
					})
				}
				goHome() {
					this.router.url.startsWith("/info") || this.router.navigate(["/" + this.checksum])
				}
				goChiTietTaiKhoan() {
					const l = {};
					l.accountNo = this.currentUser.defaultAccount, l.accountType = "D", s.a.setSelectAccount(l), this.router.navigate(["/thongtintaikhoan/chitiettaikhoan/" + this.checksum])
				}
				AnHienSoTien() {
					this.showBalance ? this.showBalance = !this.showBalance : this.loadAccountDetail()
				}
				onActivate(l) {
					window.scroll(0, 0)
				}
				fileChangeEvent(l) {
					if (console.log("fileChangeEvent", l), l.target.files.length > 0) {
						const [n] = l.target.files;
						n.size > 1024e3 ? (l.preventDefault(), this.modalService.error(this.translator.avatar_maxsize)) : (this.imageChangedEvent = l, $("#modal-profile").modal("show"))
					}
				}
				imageCropped(l) {
					this.croppedImage = l.base64
				}
				imageLoaded() {}
				cropperReady() {}
				loadImageFailed() {}
				uploadAvatar() {
					fetch(this.croppedImage).then(l => l.blob()).then(l => {
						this.apiService.computeChecksumMd5Hash(l).then(n => {
							console.log("The MD5 hash is", n);
							const u = {
								mid: "1",
								version: "1.0.3",
								isRoot: "1",
								nonce: "1585970510.732847",
								bankToken: this.storeService.getFromSession(c.a.StoreKey.ACCESS_KEY),
								requestTime: "1585970510.732727",
								ipAddress: "",
								phone: this.currentUser.user_name,
								deviceType: "0",
								deviceModel: "iPhone",
								lat: "",
								imei: "",
								lang: "vi",
								lng: "",
								sdkVersion: "11",
								screenSize: "375.000000*812.000000",
								data: {
									checksum: n
								},
								channel: "EBANK"
							};
							this.authenticationService.encryptAvatar(u).then(n => {
								const u = new FormData;
								u.append("file", l), u.append("data", n.data_form), u.append("timestamp", n.timestamp), u.append("mac", n.mac_form), this.http.post(`${i.a.uploadAvatarUrl}`, u).subscribe(l => {
									this.authenticationService.decryptAvatar(l.e).then(l => {
										const n = JSON.parse(l);
										if ("00" === n.code) {
											this.avatarUrl = JSON.parse(l).data;
											const n = s.a.getCurrentUser();
											n.avatarUrl = this.avatarUrl, this.storeService.storeInSession(c.a.StoreKey.USER_INFO, JSON.stringify(n))
										} else this.modalService.error(n.desc)
									}).catch(l => {
										console.log("Gi\u1ea3i m\xe3 avatarURL l\u1ed7i:", l), this.modalService.error(this.translator.app_error_not_defined)
									})
								})
							}).catch(l => {
								console.log("Thay \u0111\u1ed5i avatar l\u1ed7i:", l), this.modalService.error(this.translator.app_error_not_defined)
							})
						}).catch(l => {
							console.log("The MD5 l\u1ed7i:", l), this.modalService.error(this.translator.app_error_not_defined)
						})
					})
				}
				cancelUploadAvatar() {
					$("#p-upload").val("")
				}
				removeAvatar() {
					this.deleteAvatarSuccess = !1, this.modalService.error(this.translator.confirm_delete_avatar, {
						disableClose: !1,
						btnConfirm: this.translator.app_accept,
						btnCancel: this.translator.app_cancel
					}).afterClosed().subscribe(l => {
						if ("Confirm" === l) {
							const l = {
								mid: "1",
								version: "1.0.3",
								isRoot: "1",
								nonce: "1585970510.732847",
								bankToken: this.storeService.getFromSession(c.a.StoreKey.ACCESS_KEY),
								requestTime: "1585970510.732727",
								ipAddress: "",
								phone: this.currentUser.user_name,
								deviceType: "0",
								deviceModel: "iPhone",
								lat: "",
								imei: "",
								lang: "vi",
								lng: "",
								sdkVersion: "11",
								screenSize: "375.000000*812.000000",
								data: {}
							};
							this.authenticationService.encryptAvatar(l).then(l => {
								console.log("duonght1"), this.http.post(i.a.removeAvatarUrl + "?data=" + l.data + "&timestamp=" + l.timestamp + "&mac=" + l.mac, {}).subscribe(l => {
									console.log("removeAvatar success:", l), this.deleteAvatarSuccess = !0, this.avatarUrl = "", this.currentUser.avatarUrl = "", console.log("duonght2", this.avatarUrl);
									const n = this.currentUser;
									n.avatarUrl = "", sessionStorage.setItem(c.a.StoreKey.USER_INFO, JSON.stringify(n)), $("#modal-success-avatar").modal("show")
								}, l => {
									console.log(l), this.deleteAvatarSuccess = !1, $("#modal-success-avatar").modal("show")
								})
							}).catch(l => {
								console.log("Thay \u0111\u1ed5i avatar l\u1ed7i:", l), this.modalService.error(this.translator.app_error_not_defined)
							})
						}
					})
				}
				b64toBlob(l, n, u) {
					const t = atob(l),
						e = [];
					for (let r = 0; r < t.length; r += u) {
						const l = t.slice(r, r + u),
							n = new Array(l.length);
						for (let u = 0; u < l.length; u++) n[u] = l.charCodeAt(u);
						const a = new Uint8Array(n);
						e.push(a)
					}
					return new Blob(e, {
						type: n
					})
				}
			}
		},
		"A3+G": function(l, n, u) {
			"use strict";
			u("9vUh"), u("tkpy"), u.d(n, "a", (function() {
				return A
			})), u.d(n, "b", (function() {
				return t
			})), u.d(n, "c", (function() {
				return e
			})), u.d(n, "n", (function() {
				return r
			})), u.d(n, "w", (function() {
				return a
			})), u.d(n, "x", (function() {
				return i
			})), u.d(n, "y", (function() {
				return s
			})), u.d(n, "z", (function() {
				return c
			})), u.d(n, "A", (function() {
				return o
			})), u.d(n, "B", (function() {
				return b
			})), u.d(n, "C", (function() {
				return h
			})), u.d(n, "d", (function() {
				return d
			})), u.d(n, "e", (function() {
				return g
			})), u.d(n, "f", (function() {
				return m
			})), u.d(n, "g", (function() {
				return p
			})), u.d(n, "h", (function() {
				return f
			})), u.d(n, "i", (function() {
				return v
			})), u.d(n, "j", (function() {
				return y
			})), u.d(n, "k", (function() {
				return k
			})), u.d(n, "l", (function() {
				return L
			})), u.d(n, "m", (function() {
				return N
			})), u.d(n, "o", (function() {
				return _
			})), u.d(n, "p", (function() {
				return w
			})), u.d(n, "q", (function() {
				return C
			})), u.d(n, "r", (function() {
				return T
			})), u.d(n, "s", (function() {
				return S
			})), u.d(n, "t", (function() {
				return I
			})), u.d(n, "u", (function() {
				return D
			})), u.d(n, "v", (function() {
				return U
			}));
			const t = {
					labelVi: "Trang ch\u1ee7",
					labelEn: "Home"
				},
				e = () => Promise.all([u.e(1), u.e(74)]).then(u.bind(null, "vTcw")).then(l => l.InfoModuleNgFactory),
				r = {
					preload: !1,
					labelVi: "Trang ch\u1ee7",
					labelEn: "Home"
				},
				a = () => u.e(51).then(u.bind(null, "hcKE")).then(l => l.QuickTestModuleNgFactory),
				i = {
					labelVi: "Test nhanh module",
					labelEn: "Quick test"
				},
				s = () => u.e(70).then(u.bind(null, "ffu9")).then(l => l.ChuyenTienModuleNgFactory),
				c = {
					preload: !1,
					labelVi: "Chuy\u1ec3n ti\u1ec1n",
					labelEn: "Transfer"
				},
				o = () => u.e(80).then(u.bind(null, "N44G")).then(l => l.TaiKhoanModuleNgFactory),
				b = {
					preload: !1,
					labelVi: "T\xe0i kho\u1ea3n/th\u1ebb",
					labelEn: "Account/Card"
				},
				h = () => u.e(75).then(u.bind(null, "KbYL")).then(l => l.NapTienModuleNgFactory),
				d = {
					preload: !1,
					labelVi: "N\u1ea1p ti\u1ec1n",
					labelEn: "Topup"
				},
				g = () => u.e(78).then(u.bind(null, "l3WZ")).then(l => l.ThanhToanModuleNgFactory),
				m = {
					preload: !1,
					labelVi: "Thanh to\xe1n h\xf3a \u0111\u01a1n",
					labelEn: "Bill payment"
				},
				p = () => u.e(76).then(u.bind(null, "iTjl")).then(l => l.NganSachModuleNgFactory),
				f = {
					labelVi: "Ng\xe2n s\xe1ch nh\xe0 n\u01b0\u1edbc",
					labelEn: "National budget"
				},
				v = () => u.e(87).then(u.bind(null, "6x7Z")).then(l => l.TietKiemModuleNgFactory),
				y = {
					labelVi: "Ti\u1ebft ki\u1ec7m",
					labelEn: "Savings"
				},
				k = () => u.e(84).then(u.bind(null, "J4t/")).then(l => l.TienIchModuleNgFactory),
				L = {
					labelVi: "Ti\u1ec7n \xedch",
					labelEn: "Other services"
				},
				N = () => u.e(28).then(u.bind(null, "aRpQ")).then(l => l.CongCuTinhToanModuleNgFactory),
				_ = {
					labelVi: "C\xf4ng c\u1ee5 t\xednh to\xe1n",
					labelEn: "Calculation tool"
				},
				w = () => Promise.all([u.e(0), u.e(2), u.e(3), u.e(43)]).then(u.bind(null, "T96w")).then(l => l.TinDungModuleNgFactory),
				C = {
					labelVi: "D\u1ecbch v\u1ee5 th\u1ebb",
					labelEn: "Card services"
				},
				T = () => u.e(67).then(u.bind(null, "lKeI")).then(l => l.CaiDatModuleNgFactory),
				S = {
					labelVi: "C\xe0i \u0111\u1eb7t",
					labelEn: "Settings"
				},
				I = () => Promise.all([u.e(4), u.e(1), u.e(88)]).then(u.bind(null, "rruz")).then(l => l.UuDaiModuleNgFactory),
				D = {
					labelVi: "\u01afu \u0111\xe3i",
					labelEn: "Promotions"
				},
				U = {
					labelVi: "Trang ch\u1ee7",
					labelEn: "Home"
				};
			class A {}
		},
		AytR: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			const t = {
				name: "live",
				production: !0,
				apiUrl: "",
				apiPath: "/w1",
				socketUrl: "/w2",
				mediaBaseUrl: "https://digibankm5.vietcombank.com.vn",
				uploadAvatarUrl: "https://digibankm5.vietcombank.com.vn/upfile/avatar_upload",
				removeAvatarUrl: "https://digibankm5.vietcombank.com.vn/contact/remove_my_avatar",
				aes_key: "2dcd8b543bd95a83",
				mac_key: "94280a1454bc5634a33181125fcedc08",
				token: "dmNiOjI3YWNkNDM1YmRiMjU5NTRhY2Q2NDliNmE1MTNmYmI5",
				publicKey: "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEAiEPragkOAc+PM2TqG1Xqh/+mqWP0dJge+VfJ/H75nwCchOMNG297SgRKx7M3\nrvwxUfTw602rZ1LiwLV+h16/tGj5BxuQCkfAj+QFp3P4A+Kar8spo1mW2i7MCshhtzF72SHJ\n9K1yH67RmrCZdHpYdezs5yb1FtccUkUUhpbTX9PBaKMhxmecJE1jORRiSCdRl+c54NHVAbxf\nGrDDMRFw3PFv9cCmLSvP8/7mI3ClmDz+e9PsxFDItaynaMogrJDOm3D4i3CF2YgVmGBNBWfy\na/0t88eCWfM34JJ87ufQuzi6Fs9n3XOeWXN8DNc02YD9/Ua7lKFxaFF9iQfZkB3ckwIDAQAB\n-----END RSA PUBLIC KEY-----"
			}
		},
		BTpN: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		BYsx: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("phWj"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		CI6y: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("OCRy"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		Cjtx: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		Cvki: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("H4Zk"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		D5hj: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("eoIH"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 145, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(9, null, ["", ""])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(11, null, ["(", ")"])), (l()(), t.rb(12, 0, null, null, 94, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y, gi\u1edd giao d\u1ecbch"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Trans. Date, Time"])), (l()(), t.rb(20, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(29, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(30, null, ["", ""])), (l()(), t.rb(31, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(38, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(39, null, ["", ""])), (l()(), t.rb(40, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Account"])), (l()(), t.rb(47, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(48, null, ["", ""])), (l()(), t.rb(49, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(56, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), (l()(), t.rb(58, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"])), (l()(), t.rb(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"])), (l()(), t.rb(65, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(66, null, ["", " ", ""])), (l()(), t.rb(67, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(69, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(71, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(72, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Code"])), (l()(), t.rb(74, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(75, null, [" ", ""])), (l()(), t.rb(76, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(77, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(78, null, ["", ""])), (l()(), t.rb(79, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(80, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(81, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(83, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(84, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Amount"])), (l()(), t.rb(86, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(88, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(90, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(91, null, ["", " VND "])), (l()(), t.rb(92, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(94, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(95, null, [" ", " VND "])), (l()(), t.rb(96, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(97, null, [" ", " VND"])), (l()(), t.rb(98, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(99, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(100, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung thanh to\xe1n"])), (l()(), t.rb(102, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(103, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Details of Payment"])), (l()(), t.rb(105, 0, null, null, 1, "td", [
					["colspan", "3"],
					["style", "max-width: 300px;overflow-wrap: break-word;"]
				], null, null, null, null, null)), (l()(), t.Lb(106, null, ["", ""])), (l()(), t.rb(107, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(108, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(110, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(111, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(113, 0, null, null, 32, "div", [], null, null, null, null, null)), (l()(), t.rb(114, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": Bi\xean lai chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a NHTMCP Ngo\u1ea1i Th\u01b0\u01a1ng Vi\u1ec7t Nam v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba."])), (l()(), t.rb(117, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(118, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(120, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(122, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(124, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(127, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(129, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(132, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(134, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(136, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(138, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(140, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(142, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(144, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], null, (function(l, n) {
					var u = n.component;
					l(n, 9, 0, u.data.tranResult.title), l(n, 11, 0, u.data.tranResult.title_en), l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 30, 0, u.data.tranResult.transaction.tranId), l(n, 39, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 48, 0, u.data.tranResult.transaction.creditNSNN.rmAccount), l(n, 57, 0, u.data.tranResult.transaction.creditNSNN.rmAccountName), l(n, 66, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 75, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 78, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 91, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 95, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 97, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 106, 0, u.data.tranResult.transaction.remark)
				}))
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		Dgg3: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("cX4K"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 136, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 12, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 3, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG B\xc1O D\u1ecaCH V\u1ee4 \u1ee6Y QUY\u1ec0N TR\xcdCH N\u1ee2 T\u1ef0 \u0110\u1ed8NG"])), (l()(), t.rb(10, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" VCB-AUTO DEBIT"])), (l()(), t.rb(12, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(VCB-AUTO DEBIT Notice)"])), (l()(), t.rb(14, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["K\xednh g\u1eedi Qu\xfd kh\xe1ch h\xe0ng,"])), (l()(), t.rb(16, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Dear valued Customer,"])), (l()(), t.rb(18, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\u1ea3m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank. "])), (l()(), t.rb(20, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for choosing Vietcombank\u2019s services."])), (l()(), t.rb(22, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Tr\xe2n tr\u1ecdng th\xf4ng b\xe1o Qu\xfd kh\xe1ch \u0111\xe3 \u0111\u0103ng k\xfd th\xe0nh c\xf4ng d\u1ecbch v\u1ee5 \u1ee6y quy\u1ec1n tr\xedch n\u1ee3 t\u1ef1 \u0111\u1ed9ng VCB-Auto Debit v\u1edbi th\xf4ng tin sau \u0111\xe2y:"])), (l()(), t.rb(24, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Please be advised that you\u2019ve sucessfully registered VCB-Auto Debit Service as follows: "])), (l()(), t.rb(26, 0, null, null, 101, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(28, 0, null, null, 6, "td", [
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(29, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN T\xc0I KHO\u1ea2N NGU\u1ed2N"])), (l()(), t.rb(31, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["DEBIT ACCOUNT"])), (l()(), t.rb(35, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(37, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 t\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(39, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(40, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit account"])), (l()(), t.rb(42, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(43, null, ["", ""])), (l()(), t.rb(44, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 6, "td", [
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(46, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN \u0110\u0102NG K\xdd"])), (l()(), t.rb(48, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(49, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["DETAILS"])), (l()(), t.rb(52, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(53, 0, null, null, 6, "td", [
					["class", "fontsize1"],
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN NH\xc0 CUNG C\u1ea4P D\u1ecaCH V\u1ee4"])), (l()(), t.rb(56, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(57, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(58, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["SERVICE PROVIDER INFORMATION"])), (l()(), t.rb(60, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), t.rb(61, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(62, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i d\u1ecbch v\u1ee5"])), (l()(), t.rb(64, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(65, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Service"])), (l()(), t.rb(67, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), t.Lb(68, null, [" ", ""])), (l()(), t.rb(69, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(70, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(71, null, ["", ""])), (l()(), t.rb(72, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), t.rb(73, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(74, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean nh\xe0 cung c\u1ea5p d\u1ecbch v\u1ee5"])), (l()(), t.rb(76, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(77, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Service provider "])), (l()(), t.rb(79, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), t.Lb(80, null, [" ", ""])), (l()(), t.rb(81, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(82, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(83, null, ["", ""])), (l()(), t.rb(84, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(85, 0, null, null, 6, "td", [
					["class", "fontsize1"],
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(86, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN KH\xc1CH H\xc0NG"])), (l()(), t.rb(88, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(89, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(90, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["CUSTOMER INFORMATION"])), (l()(), t.rb(92, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(93, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(94, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\xe3 kh\xe1ch h\xe0ng"])), (l()(), t.rb(96, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(97, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Customer code"])), (l()(), t.rb(99, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(100, null, ["", ""])), (l()(), t.rb(101, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(102, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(103, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean \u0111\u01a1n v\u1ecb \u0111i\u1ec7n l\u1ef1c/T\xean \u0111\u01a1n v\u1ecb n\u01b0\u1edbc"])), (l()(), t.rb(105, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(106, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Unit "])), (l()(), t.rb(108, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(109, null, ["", ""])), (l()(), t.rb(110, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(111, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(112, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ch\u1ee7 h\u1ee3p \u0111\u1ed3ng"])), (l()(), t.rb(114, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(115, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Contract holder "])), (l()(), t.rb(117, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(118, null, ["", ""])), (l()(), t.rb(119, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(120, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(121, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ecba ch\u1ec9 "])), (l()(), t.rb(123, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(124, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Address "])), (l()(), t.rb(126, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(127, null, ["", ""])), (l()(), t.rb(128, 0, null, null, 8, "div", [], null, null, null, null, null)), (l()(), t.rb(129, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin th\u1eafc m\u1eafc xin li\xean h\u1ec7 v\u1edbi Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 c\u1ee7a Vietcombank 24/7 1900 54 54 13."])), (l()(), t.rb(131, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["If any questions, don\u2019t hesitate to contact with Vietcombank Call Center 1900 54 54 13."])), (l()(), t.rb(133, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Tr\xe2n tr\u1ecdng,"])), (l()(), t.rb(135, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Sincerely"]))], null, (function(l, n) {
					var u = n.component;
					l(n, 43, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 68, 0, u.data.tranResult.transaction.serviceName), l(n, 71, 0, u.data.tranResult.transaction.serviceNameEN), l(n, 80, 0, u.data.tranResult.transaction.providerName), l(n, 83, 0, u.data.tranResult.transaction.providerNameEN), l(n, 100, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 109, 0, u.data.tranResult.transaction.supplierName), l(n, 118, 0, u.data.tranResult.transaction.creditAccountName), l(n, 127, 0, u.data.tranResult.transaction.creditAccountAddr)
				}))
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		EKeg: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		"F+o+": function(l, n, u) {
			"use strict";
			var t = u("8Y7J"),
				e = u("SVse"),
				r = u("TSSN"),
				a = u("iInd"),
				i = u("Yqwp"),
				s = u("s7LF"),
				c = u("tr4J");
			let o = (() => {
				class l {
					constructor(l) {
						this.modalBeneService = l, this.isShow = !0, this.benes = [], this.tempBenes = []
					}
					ngOnInit() {
						this.modalBeneService.benes.subscribe(l => {
							this.search = "", this.tempBenes = l, this.benes = l
						})
					}
					ngOnDestroy() {
						this.modalBeneService.setBenes([]), this.modalBeneService.setSelectedBene({})
					}
					onBeneSelected(l) {
						this.modalBeneService.setSelectedBene(l), $("#modal-contact").modal("hide")
					}
					searchContact(l) {
						const n = new RegExp(l.toLowerCase(), "gi");
						this.benes = this.tempBenes.filter(l => {
							const u = Object.keys(l);
							for (const t of u)
								if ("string" == typeof l[t] && l[t].search(n) >= 0) return l
						})
					}
				}
				return l.ngInjectableDef = t.Rb({
					factory: function() {
						return new l(t.Sb(c.a))
					},
					token: l,
					providedIn: "root"
				}), l
			})();
			var b = t.pb({
				encapsulation: 2,
				styles: [],
				data: {}
			});

			function h(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 5, "div", [
					["class", "blank-section d-flex align-items-center justify-content-center flex-column"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 1, "div", [
					["class", "blank-ic"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "./assets/images/web/icons/dark/ic_blank-folder.svg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 2, "div", [
					["class", "blank-txt text-center"]
				], null, null, null, null, null)), (l()(), t.Lb(4, null, [" ", " "])), t.Fb(131072, r.j, [r.k, t.h])], null, (function(l, n) {
					l(n, 4, 0, t.Mb(n, 4, 0, t.Db(n, 5).transform("txn.bene_modal.no_results")))
				}))
			}

			function d(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 7, "span", [
					["class", "radio-text span-wrap col no-p"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 2, "span", [
					["class", "txt txt--main b"]
				], null, null, null, null, null)), t.qb(2, 540672, null, 0, i.a, [t.k, t.C], {
					keywords: [0, "keywords"],
					textSearch: [1, "textSearch"]
				}, null), (l()(), t.Lb(3, null, ["", ""])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 2, "span", [
					["class", "txt txt--main"]
				], null, null, null, null, null)), t.qb(6, 540672, null, 0, i.a, [t.k, t.C], {
					keywords: [0, "keywords"],
					textSearch: [1, "textSearch"]
				}, null), (l()(), t.Lb(7, null, ["", ""]))], (function(l, n) {
					var u = n.component;
					l(n, 2, 0, u.search, n.parent.context.$implicit.username), l(n, 6, 0, u.search, n.parent.context.$implicit.creditAccountNo)
				}), (function(l, n) {
					l(n, 3, 0, n.parent.context.$implicit.username), l(n, 7, 0, n.parent.context.$implicit.creditAccountNo)
				}))
			}

			function g(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 7, "span", [
					["class", "radio-text span-wrap col no-p"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 2, "span", [
					["class", "txt txt--main b"]
				], null, null, null, null, null)), t.qb(2, 540672, null, 0, i.a, [t.k, t.C], {
					keywords: [0, "keywords"],
					textSearch: [1, "textSearch"]
				}, null), (l()(), t.Lb(3, null, ["", ""])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 2, "span", [
					["class", "txt txt--main"]
				], null, null, null, null, null)), t.qb(6, 540672, null, 0, i.a, [t.k, t.C], {
					keywords: [0, "keywords"],
					textSearch: [1, "textSearch"]
				}, null), (l()(), t.Lb(7, null, ["", ""]))], (function(l, n) {
					var u = n.component;
					l(n, 2, 0, u.search, n.parent.context.$implicit.username), l(n, 6, 0, u.search, n.parent.context.$implicit.invoiceNo)
				}), (function(l, n) {
					l(n, 3, 0, n.parent.context.$implicit.username), l(n, 7, 0, n.parent.context.$implicit.invoiceNo)
				}))
			}

			function m(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 11, "span", [
					["class", "radio-text span-wrap col no-p"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 2, "span", [
					["class", "txt txt--main b"]
				], null, null, null, null, null)), t.qb(2, 540672, null, 0, i.a, [t.k, t.C], {
					keywords: [0, "keywords"],
					textSearch: [1, "textSearch"]
				}, null), (l()(), t.Lb(3, null, ["", ""])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 2, "span", [
					["class", "txt txt--main"]
				], null, null, null, null, null)), t.qb(6, 540672, null, 0, i.a, [t.k, t.C], {
					keywords: [0, "keywords"],
					textSearch: [1, "textSearch"]
				}, null), (l()(), t.Lb(7, null, ["", ""])), (l()(), t.rb(8, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(9, 0, null, null, 2, "span", [
					["class", "txt txt--main"]
				], null, null, null, null, null)), t.qb(10, 540672, null, 0, i.a, [t.k, t.C], {
					keywords: [0, "keywords"],
					textSearch: [1, "textSearch"]
				}, null), (l()(), t.Lb(11, null, ["", ""]))], (function(l, n) {
					var u = n.component;
					l(n, 2, 0, u.search, n.parent.context.$implicit.username), l(n, 6, 0, u.search, n.parent.context.$implicit.creditAccountNo), l(n, 10, 0, u.search, n.parent.context.$implicit.creditBankName)
				}), (function(l, n) {
					l(n, 3, 0, n.parent.context.$implicit.username), l(n, 7, 0, n.parent.context.$implicit.creditAccountNo), l(n, 11, 0, n.parent.context.$implicit.creditBankName)
				}))
			}

			function p(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "span", [
					["class", "radio-text span-wrap col no-p"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 2, "span", [
					["class", "txt txt--main b"]
				], null, null, null, null, null)), t.qb(2, 540672, null, 0, i.a, [t.k, t.C], {
					keywords: [0, "keywords"],
					textSearch: [1, "textSearch"]
				}, null), (l()(), t.Lb(3, null, ["", ""])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 2, "span", [
					["class", "txt txt--main"]
				], null, null, null, null, null)), t.qb(6, 540672, null, 0, i.a, [t.k, t.C], {
					keywords: [0, "keywords"],
					textSearch: [1, "textSearch"]
				}, null), (l()(), t.Lb(7, null, ["", ""])), (l()(), t.rb(8, 0, null, null, 0, "br", [], null, null, null, null, null))], (function(l, n) {
					var u = n.component;
					l(n, 2, 0, u.search, n.parent.context.$implicit.username), l(n, 6, 0, u.search, n.parent.context.$implicit.creditAccountNo)
				}), (function(l, n) {
					l(n, 3, 0, n.parent.context.$implicit.username), l(n, 7, 0, n.parent.context.$implicit.creditAccountNo)
				}))
			}

			function f(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "span", [
					["class", "radio-text span-wrap col no-p"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 2, "span", [
					["class", "txt txt--main b"]
				], null, null, null, null, null)), t.qb(2, 540672, null, 0, i.a, [t.k, t.C], {
					keywords: [0, "keywords"],
					textSearch: [1, "textSearch"]
				}, null), (l()(), t.Lb(3, null, ["", ""])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 2, "span", [
					["class", "txt txt--main"]
				], null, null, null, null, null)), t.qb(6, 540672, null, 0, i.a, [t.k, t.C], {
					keywords: [0, "keywords"],
					textSearch: [1, "textSearch"]
				}, null), (l()(), t.Lb(7, null, ["", ""])), (l()(), t.rb(8, 0, null, null, 0, "br", [], null, null, null, null, null))], (function(l, n) {
					var u = n.component;
					l(n, 2, 0, u.search, n.parent.context.$implicit.username), l(n, 6, 0, u.search, n.parent.context.$implicit.issueId)
				}), (function(l, n) {
					l(n, 3, 0, n.parent.context.$implicit.username), l(n, 7, 0, n.parent.context.$implicit.issueId)
				}))
			}

			function v(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 12, "label", [
					["class", "list-link-item radio"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 0, "input", [
					["class", "hidden"],
					["name", "radio"],
					["type", "radio"]
				], [
					[8, "checked", 0]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.onBeneSelected(l.context.$implicit) && t), t
				}), null, null)), (l()(), t.gb(16777216, null, null, 1, null, d)), t.qb(3, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, g)), t.qb(5, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, m)), t.qb(7, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, p)), t.qb(9, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, f)), t.qb(11, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(12, 0, null, null, 0, "span", [
					["class", "radio-ic radio-sm radio-style-2 ripple-radio"]
				], null, null, null, null, null))], (function(l, n) {
					l(n, 3, 0, "0540" === n.context.$implicit.tranType || "0541" === n.context.$implicit.tranType || "0552" === n.context.$implicit.tranType || "0553" === n.context.$implicit.tranType), l(n, 5, 0, "0440" === n.context.$implicit.tranType || "0301" === n.context.$implicit.tranType || "0308" === n.context.$implicit.tranType), l(n, 7, 0, "0542" === n.context.$implicit.tranType || "0560" === n.context.$implicit.tranType || "0561" === n.context.$implicit.tranType || "0551" === n.context.$implicit.tranType), l(n, 9, 0, "0543" === n.context.$implicit.tranType || "0306" === n.context.$implicit.tranType || "0307" === n.context.$implicit.tranType), l(n, 11, 0, "0557" === n.context.$implicit.tranType)
				}), (function(l, n) {
					l(n, 1, 0, n.context.$implicit.selected)
				}))
			}

			function y(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 2, "div", [
					["class", "list-link list-link-sm list-link-no-ml live-search-result list-radio-modal-close"]
				], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, v)), t.qb(2, 278528, null, 0, e.m, [t.N, t.K, t.q], {
					ngForOf: [0, "ngForOf"]
				}, null)], (function(l, n) {
					l(n, 2, 0, n.component.benes)
				}), null)
			}

			function k(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 30, "div", [
					["aria-hidden", "true"],
					["aria-labelledby", "luudanhbathuhuong"],
					["class", "modal mopdal-fix-height-xs fade "],
					["id", "modal-contact"],
					["role", "dialog"],
					["tabindex", "-1"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 29, "div", [
					["class", "modal-dialog modal-dialog-centered modal-sm modal-dialog-scrollable"],
					["role", "document"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 28, "div", [
					["class", "modal-content live-search-list live-search-list-show"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 16, "div", [
					["class", "modal-header flex-column"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 2, "h2", [
					["class", "modal-title"]
				], null, null, null, null, null)), (l()(), t.Lb(5, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(7, 0, null, null, 10, "div", [
					["class", "form-group width-100 mt15"]
				], null, null, null, null, null)), (l()(), t.rb(8, 0, null, null, 9, "div", [
					["class", "input-group"]
				], null, null, null, null, null)), (l()(), t.rb(9, 0, null, null, 6, "input", [
					["class", "input input-sm input-ic-sm input-clean live-search-box no-result"],
					["id", "TimKiemDanhBa"],
					["type", "text"]
				], [
					[1, "placeholder", 0],
					[2, "ng-untouched", null],
					[2, "ng-touched", null],
					[2, "ng-pristine", null],
					[2, "ng-dirty", null],
					[2, "ng-valid", null],
					[2, "ng-invalid", null],
					[2, "ng-pending", null]
				], [
					[null, "ngModelChange"],
					[null, "input"],
					[null, "blur"],
					[null, "compositionstart"],
					[null, "compositionend"]
				], (function(l, n, u) {
					var e = !0,
						r = l.component;
					return "input" === n && (e = !1 !== t.Db(l, 10)._handleInput(u.target.value) && e), "blur" === n && (e = !1 !== t.Db(l, 10).onTouched() && e), "compositionstart" === n && (e = !1 !== t.Db(l, 10)._compositionStart() && e), "compositionend" === n && (e = !1 !== t.Db(l, 10)._compositionEnd(u.target.value) && e), "ngModelChange" === n && (e = !1 !== (r.search = u) && e), "input" === n && (e = !1 !== r.searchContact(u.target.value) && e), e
				}), null, null)), t.qb(10, 16384, null, 0, s.e, [t.C, t.k, [2, s.a]], null, null), t.Ib(1024, null, s.m, (function(l) {
					return [l]
				}), [s.e]), t.qb(12, 671744, null, 0, s.r, [
					[8, null],
					[8, null],
					[8, null],
					[6, s.m]
				], {
					model: [0, "model"]
				}, {
					update: "ngModelChange"
				}), t.Ib(2048, null, s.n, null, [s.r]), t.qb(14, 16384, null, 0, s.o, [
					[4, s.n]
				], null, null), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(16, 0, null, null, 1, "div", [
					["class", "input-ic"]
				], null, null, null, null, null)), (l()(), t.rb(17, 0, null, null, 0, "img", [
					["alt", ""],
					["class", "ic-md"],
					["src", "./assets/images/base/icons/search/square/base.svg"]
				], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "button", [
					["class", "ubtn ubg-blank ubtn-circle-md modal-close ripple-100 legitRipple"],
					["data-dismiss", "modal"],
					["type", "button"]
				], null, null, null, null, null)), (l()(), t.rb(19, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "./assets/images/base/icons/close/square/base.svg"]
				], null, null, null, null, null)), (l()(), t.rb(20, 0, null, null, 3, "div", [
					["class", "modal-body isolated-scroll"]
				], null, null, null, null, null)), (l()(), t.gb(0, [
					["emptyBox", 2]
				], null, 0, null, h)), (l()(), t.gb(16777216, null, null, 1, null, y)), t.qb(23, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"],
					ngIfElse: [1, "ngIfElse"]
				}, null), (l()(), t.rb(24, 0, null, null, 6, "div", [
					["class", "modal-footer"]
				], null, null, null, null, null)), (l()(), t.rb(25, 0, null, null, 5, "div", [
					["class", "row row-15 list-pv5"]
				], null, null, null, null, null)), (l()(), t.rb(26, 0, null, null, 4, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 3, "button", [
					["class", "ubtn ubg-primary ubtn-md ripple no-m"],
					["data-target", "#modal-contact"],
					["data-toggle", "modal"]
				], null, null, null, null, null)), (l()(), t.rb(28, 0, null, null, 2, "span", [
					["class", "ubtn-text"]
				], null, null, null, null, null)), (l()(), t.Lb(29, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h])], (function(l, n) {
					var u = n.component;
					l(n, 12, 0, u.search), l(n, 23, 0, u.benes && u.benes.length > 0, t.Db(n, 21))
				}), (function(l, n) {
					l(n, 5, 0, t.Mb(n, 5, 0, t.Db(n, 6).transform("txn.bene_modal.title"))), l(n, 9, 0, t.Mb(n, 9, 0, t.Db(n, 15).transform("txn.bene_modal.title")), t.Db(n, 14).ngClassUntouched, t.Db(n, 14).ngClassTouched, t.Db(n, 14).ngClassPristine, t.Db(n, 14).ngClassDirty, t.Db(n, 14).ngClassValid, t.Db(n, 14).ngClassInvalid, t.Db(n, 14).ngClassPending), l(n, 29, 0, t.Mb(n, 29, 0, t.Db(n, 30).transform("app_close")))
				}))
			}
			class L {
				constructor(l) {
					this.viewContainerRef = l
				}
			}
			var N = u("dPnz"),
				_ = u("wd/R"),
				w = u("XgRA"),
				C = u("GBX2"),
				T = u("TGGJ"),
				S = u("JdfP"),
				I = u("Cjtx"),
				D = u("/8/R"),
				U = u("kKWH"),
				A = u("ub6S"),
				R = u("uQNk"),
				E = u("lYIE"),
				P = u("uhOr"),
				x = u("+bJz"),
				O = u("EKeg"),
				B = u("J0em"),
				K = u("uYey"),
				j = u("8nTM"),
				q = u("d/F/"),
				M = u("BTpN"),
				V = u("uBqB"),
				F = u("aR/e"),
				H = u("3+hJ"),
				Y = u("OCRy"),
				J = u("HmbI"),
				G = u("WDer"),
				Q = u("YovI"),
				z = u("O+Vu"),
				X = u("eoIH"),
				W = u("1HeJ"),
				Z = u("q5RT"),
				ll = u("P2tI"),
				nl = u("brVl"),
				ul = u("cX4K"),
				tl = u("lPbr"),
				el = u("phWj"),
				rl = u("uGTV"),
				al = u("j45v"),
				il = u("vfFc"),
				sl = u("63Kk"),
				cl = u("X6sQ"),
				ol = u("VmWZ"),
				bl = u("R5Qd"),
				hl = u("N5Xj"),
				dl = u("heEX"),
				gl = u("yH/L"),
				ml = u("WKmO"),
				pl = u("2sep"),
				fl = u("H4Zk"),
				vl = u("sm2b");
			class yl {
				constructor(l, n, u) {
					this.compFactoryResolver = l, this.modalPrintService = n, this.loaderService = u
				}
				ngOnInit() {
					this.modalPrintService.data.subscribe(l => {
						if (console.log("print 3", l), l && "{}" !== JSON.stringify(l)) {
							this.data = l;
							try {
								let n;
								if (l.data.tranResult.transaction.createTime.includes("/")) {
									const u = l.data.tranResult.transaction.createTime.indexOf("/");
									n = l.data.tranResult.transaction.createTime.indexOf(":") < u ? _(l.data.tranResult.transaction.createTime, "HH:mm DD/MM/YYYY").format("DD/MM/YYYY HH:mm") : _(l.data.tranResult.transaction.createTime, "DD/MM/YYYY HH:mm:ss").format("DD/MM/YYYY HH:mm")
								} else n = l.data.tranResult.transaction.createTime.includes("-") ? _(l.data.tranResult.transaction.createTime, "HH:mm:ss DD-MM-YYYY").format("DD/MM/YYYY HH:mm") : l.data.tranResult.transaction.createTime;
								this.data.data.tranResult.transaction.createTime = n
							} catch (n) {}
							this.loadComponent()
						}
					})
				}
				loadComponent() {
					let l;
					switch (console.log("print 4", this.data.screen), this.data.screen) {
						case w.a.ReceiptPrintScreen.ChuyenTienTrongNgayHienTai:
							l = B.a;
							break;
						case w.a.ReceiptPrintScreen.ChuyenTienTrongTuongLai:
							l = K.a;
							break;
						case w.a.ReceiptPrintScreen.ChuyenTienTrongDinhKy:
							l = O.a;
							break;
						case w.a.ReceiptPrintScreen.ChuyenTienQuaNHNNNgayHienTai:
							l = P.a;
							break;
						case w.a.ReceiptPrintScreen.ChuyenTienQuaNHNNTuongLai:
							l = x.a;
							break;
						case w.a.ReceiptPrintScreen.ChuyenTienQuaNHNNDinhKy:
							l = E.a;
							break;
						case w.a.ReceiptPrintScreen.ChuyenTienNhanhQuaTaiKhoan:
							l = A.a;
							break;
						case w.a.ReceiptPrintScreen.ChuyenTienNhanhQuaThe:
							l = R.a;
							break;
						case w.a.ReceiptPrintScreen.ChuyenTienBangCMND:
							l = U.a;
							break;
						case w.a.ReceiptPrintScreen.ChuyenTienTuThien:
							l = j.a;
							break;
						case w.a.ReceiptPrintScreen.ThanhToanHoaDon:
							l = W.a;
							break;
						case w.a.ReceiptPrintScreen.MoTietKiem:
							l = ml.a;
							break;
						case w.a.ReceiptPrintScreen.NopThemTienTietKiem:
							l = pl.a;
							break;
						case w.a.ReceiptPrintScreen.RutMotPhanTietKiem:
							l = fl.a;
							break;
						case w.a.ReceiptPrintScreen.TatToanTietKiem:
							l = vl.a;
							break;
						case w.a.ReceiptPrintScreen.DangKyTietKiemTuDong:
							l = dl.a;
							break;
						case w.a.ReceiptPrintScreen.HuyTietKiemTuDong:
							l = gl.a;
							break;
						case w.a.ReceiptPrintScreen.DangKySoftOTPDocLap:
							l = S.a;
							break;
						case w.a.ReceiptPrintScreen.HuySoftOTPDocLap:
							l = D.a;
							break;
						case w.a.ReceiptPrintScreen.KichHoatSMSChuDong:
							l = al.a;
							break;
						case w.a.ReceiptPrintScreen.DangKyTaiKhoanNhanBienDong:
							l = nl.a;
							break;
						case w.a.ReceiptPrintScreen.HuyTaiKhoanNhanBienDong:
							l = el.a;
							break;
						case w.a.ReceiptPrintScreen.ThanhToanTheTinDung:
							l = J.a;
							break;
						case w.a.ReceiptPrintScreen.MoKhoaThe:
							l = Y.a;
							break;
						case w.a.ReceiptPrintScreen.ThayDoiHanMucThe:
							l = G.a;
							break;
						case w.a.ReceiptPrintScreen.ThayDoiTaiKhoanChiDinh:
							l = Q.a;
							break;
						case w.a.ReceiptPrintScreen.DangKyThanhToanTrenInternet:
							l = M.a;
							break;
						case w.a.ReceiptPrintScreen.HuyThanhToanTrenInternet:
							l = F.a;
							break;
						case w.a.ReceiptPrintScreen.KhoaTheTamThoi:
							l = H.a;
							break;
						case w.a.ReceiptPrintScreen.DangKyEmailNhanCardOTP:
							l = q.a;
							break;
						case w.a.ReceiptPrintScreen.HuyEmailNhanCardOTP:
							l = V.a;
							break;
						case w.a.ReceiptPrintScreen.NgungDichVuSMSBanking:
							l = sl.a;
							break;
						case w.a.ReceiptPrintScreen.ThayDoiTaiKhoanSMSBanking:
							l = hl.a;
							break;
						case w.a.ReceiptPrintScreen.DangKyViDienTu:
							l = tl.a;
							break;
						case w.a.ReceiptPrintScreen.NgungViDienTu:
							l = cl.a;
							break;
						case w.a.ReceiptPrintScreen.ThayDoiSoTaiKhoanViDienTu:
							l = bl.a;
							break;
						case w.a.ReceiptPrintScreen.DangKyPhoneBanking:
							l = ll.a;
							break;
						case w.a.ReceiptPrintScreen.CapLaiMatKhauPhoneBanking:
							l = Z.a;
							break;
						case w.a.ReceiptPrintScreen.DangKyUyQuyenAutoDebit:
							l = ul.a;
							break;
						case w.a.ReceiptPrintScreen.HuyUyQuyenAutoDebit:
							l = rl.a;
							break;
						case w.a.ReceiptPrintScreen.ThayDoiSoTaiKhoanAutoDebit:
							l = ol.a;
							break;
						case w.a.ReceiptPrintScreen.LapYeuCauTraSoat:
							l = il.a;
							break;
						case w.a.ReceiptPrintScreen.CaiDatHanMucChuyenTien:
							l = C.a;
							break;
						case w.a.ReceiptPrintScreen.CaiDatTaiKhoanThuPhi:
							l = T.a;
							break;
						case w.a.ReceiptPrintScreen.DoiMatKhau:
							l = I.a;
							break;
						case w.a.ReceiptPrintScreen.NopThue:
							l = X.a;
							break;
						case w.a.ReceiptPrintScreen.NopBaoHiemXaHoi:
							l = N.a;
							break;
						default:
							l = z.a
					}
					const n = this.compFactoryResolver.resolveComponentFactory(l);
					if (!this.appReceiptPrint) return;
					const u = this.appReceiptPrint.viewContainerRef;
					u.clear(), u.createComponent(n).instance.data = this.data.data, this.loaderService.show(), setTimeout(() => {
						try {
							if (this.data && "{}" !== JSON.stringify(this.data)) {
								console.log("print 7", this.data);
								const l = document.getElementById("print-area").outerHTML;
								window.open("").document.write(`\n\t\t\t\t\t<!DOCTYPE html>\n\t\t\t\t\t<html>\n\t\t\t\t\t\t<head>\n\t\t\t\t\t\t\t<meta charset="UTF-8">\n\t\t\t\t\t\t\t<meta name="format-detection" content="telephone=no">\n\t\t\t\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">\n\t\t\t\t\t\t\t<meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n\t\t\t\t\t\t\t<title>Vietcombank</title>\n\t\t\t\t\t\t\t<link rel="stylesheet" href="./assets/css/print.css">\n\t\t\t\t\t\t\t\x3c!--[if IE 9]><link rel="stylesheet" href="./assets/css/ie9.css" type="text/css" /><![endif]--\x3e\n\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t@page { margin: 0; }\n\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t</head>\n\t\t\t\t\t\t<body onload="window.print(); window.close();">${l}</body>\n\t\t\t\t\t\t<script>\n\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\tdocument.execCommand('print', false, null);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcatch(e) {\n\t\t\t\t\t\t\t\twindow.print();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t<\/script>\n\t\t\t\t\t</html>`)
							}
						} catch (l) {} finally {
							this.loaderService.hide()
						}
					}, 2e3)
				}
				ngOnDestroy() {
					this.modalPrintService.print(null, null)
				}
			}
			var kl = u("6Csp"),
				Ll = u("giTn"),
				Nl = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function _l(l) {
				return t.Nb(0, [(l()(), t.gb(0, null, null, 0))], null, null)
			}

			function wl(l) {
				return t.Nb(0, [t.Jb(671088640, 1, {
					appReceiptPrint: 0
				}), (l()(), t.gb(16777216, null, null, 1, null, _l)), t.qb(2, 16384, [
					[1, 4]
				], 0, L, [t.N], null, null)], null, null)
			}
			var Cl = u("SVWe"),
				Tl = u("YD+O"),
				Sl = u("cUpR"),
				Il = u("9vUh"),
				Dl = u("47AC"),
				Ul = u("pW6c"),
				Al = u("RJTb"),
				Rl = u("IheW"),
				El = u("NJ5i");
			u.d(n, "a", (function() {
				return ln
			}));
			var Pl = t.pb({
				encapsulation: 2,
				styles: [],
				data: {}
			});

			function xl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 0, "a", [
					["class", "profile__img"],
					["data-toggle", "dropdown"],
					["href", ""]
				], [
					[4, "background-image", null]
				], null, null, null, null))], null, (function(l, n) {
					l(n, 0, 0, "url(" + n.component.avatarUrl + ")")
				}))
			}

			function Ol(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 0, "a", [
					["class", "profile__img"],
					["data-toggle", "dropdown"],
					["href", ""]
				], null, null, null, null, null))], null, null)
			}

			function Bl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 0, "img", [
					["alt", ""],
					["class", "ic-md"],
					["src", "assets/images/web/icons/primary/ic_image-up.svg"]
				], null, null, null, null, null))], null, null)
			}

			function Kl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 0, "img", [
					["alt", ""],
					["class", "ic-md"],
					["src", "assets/vip/vip-images/web/icons/primary/ic_image-up.svg"]
				], null, null, null, null, null))], null, null)
			}

			function jl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 0, "img", [
					["alt", ""],
					["class", "ic-md"],
					["src", "assets/images/web/icons/primary/ic_trash-green.svg"]
				], null, null, null, null, null))], null, null)
			}

			function ql(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 0, "img", [
					["alt", ""],
					["class", "ic-md"],
					["src", "assets/vip/vip-images/web/icons/primary/ic_trash-green.svg"]
				], null, null, null, null, null))], null, null)
			}

			function Ml(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "a", [
					["class", "dropdown-inner"],
					["data-toggle", "modal"],
					["href", "javascript:void(0)"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.removeAvatar() && t), t
				}), null, null)), (l()(), t.rb(1, 0, null, null, 4, "div", [
					["class", "dropdown-ic"]
				], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, jl)), t.qb(3, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, ql)), t.qb(5, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(6, 0, null, null, 2, "div", [
					["class", "dropdown-text color-black"]
				], null, null, null, null, null)), (l()(), t.Lb(7, null, [" ", " "])), t.Fb(131072, r.j, [r.k, t.h])], (function(l, n) {
					var u = n.component;
					l(n, 3, 0, "VIP" !== u.currentUser.cusLevel), l(n, 5, 0, "VIP" === u.currentUser.cusLevel)
				}), (function(l, n) {
					l(n, 7, 0, t.Mb(n, 7, 0, t.Db(n, 8).transform("delete_avatar")))
				}))
			}

			function Vl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "div", [
					["class", "h5"]
				], null, null, null, null, null)), (l()(), t.Lb(1, null, ["********* ", ""]))], null, (function(l, n) {
					l(n, 1, 0, n.component.accountDetail.accountCurr)
				}))
			}

			function Fl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "div", [
					["class", "h5"]
				], null, null, null, null, null)), (l()(), t.Lb(1, null, [" ", " ", ""]))], null, (function(l, n) {
					var u = n.component;
					l(n, 1, 0, u.accountDetail.availBalance, u.accountDetail.accountCurr)
				}))
			}

			function Hl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "div", [
					["class", "h3 b  color-primary text-left"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1800 1565"]))], null, null)
			}

			function Yl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "div", [
					["class", "h3 b  color-primary text-left"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"]))], null, null)
			}

			function Jl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 112, "div", [
					["class", "sidebar sidebar-right isolated-scroll"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 2, "div", [
					["class", "sidebar-mobile-header"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 1, "label", [
					["class", "ubg-trans sidebar-mobile-back ripple"],
					["for", "sidebar-right-trigger"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/icons/white/ic-arrow-back.svg"],
					["width", "24"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 108, "div", [
					["class", "sidebar-right__cont list-mb10 pt15"]
				], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 2, "a", [
					["class", "block sidebar-right-logo text-center pb10"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 6).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(6, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(7, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/logo-digibank-white.svg"],
					["width", "167"]
				], null, null, null, null, null)), (l()(), t.rb(8, 0, null, null, 31, "a", [
					["class", "box box--sm box--light box--profile text-center"],
					["href", "javascript:void(0)"]
				], null, null, null, null, null)), (l()(), t.rb(9, 0, null, null, 30, "div", [
					["class", "profile text-center"]
				], null, null, null, null, null)), (l()(), t.rb(10, 0, null, null, 19, "div", [
					["class", "dropdown"]
				], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, xl)), t.qb(12, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, Ol)), t.qb(14, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(15, 0, null, null, 14, "ul", [
					["class", "dropdown-menu dropdown-menu-sm dropdown-menu-center"]
				], null, null, null, null, null)), (l()(), t.rb(16, 0, null, null, 10, "li", [], null, null, null, null, null)), (l()(), t.rb(17, 0, null, null, 9, "label", [
					["class", "dropdown-inner pointer"],
					["href", ""]
				], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 0, "input", [
					["accept", "image/*"],
					["id", "p-upload"],
					["type", "file"],
					["value", "Choose a file"]
				], null, [
					[null, "change"]
				], (function(l, n, u) {
					var t = !0;
					return "change" === n && (t = !1 !== l.component.fileChangeEvent(u) && t), t
				}), null, null)), (l()(), t.rb(19, 0, null, null, 4, "div", [
					["class", "dropdown-ic"]
				], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, Bl)), t.qb(21, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, Kl)), t.qb(23, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(24, 0, null, null, 2, "div", [
					["class", "dropdown-text color-black"]
				], null, null, null, null, null)), (l()(), t.Lb(25, null, [" ", " "])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(27, 0, null, null, 2, "li", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, Ml)), t.qb(29, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(30, 0, null, null, 2, "div", [
					["class", "color-white-3"]
				], null, null, null, null, null)), (l()(), t.Lb(31, null, [" ", " "])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(33, 0, null, null, 1, "div", [
					["class", "profile-name h5 color-white"]
				], null, null, null, null, null)), (l()(), t.Lb(34, null, [" ", " "])), (l()(), t.rb(35, 0, null, null, 4, "div", [
					["class", "profile-time h6 color-white-3 pt10"],
					["style", "font-size: 10px;"]
				], null, null, null, null, null)), (l()(), t.Lb(36, null, ["", " "])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(38, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(39, null, [" ", ""])), (l()(), t.rb(40, 0, null, null, 33, "div", [
					["class", "box box--sm box--light box--tk no-p"]
				], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 9, "div", [
					["class", "box-sm-header ph20 pt20"]
				], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 8, "div", [
					["class", "table"]
				], null, null, null, null, null)), (l()(), t.rb(43, 0, null, null, 2, "div", [
					["class", "td title color-white p"]
				], null, null, null, null, null)), (l()(), t.Lb(44, null, [" ", " "])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(46, 0, null, null, 4, "div", [
					["class", "td text-right"]
				], null, null, null, null, null)), (l()(), t.rb(47, 0, null, null, 3, "a", [
					["class", "link h6 hover-line"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 48).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(48, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.Lb(49, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(51, 0, null, null, 22, "div", [
					["class", "list-link-sm"]
				], null, null, null, null, null)), (l()(), t.rb(52, 0, null, null, 21, "a", [
					["class", "list-link-item has-link-arrow tk"],
					["href", "javascript:void(0)"]
				], null, null, null, null, null)), (l()(), t.rb(53, 0, null, null, 20, "div", [
					["class", "tk-inner color-white txt no-pl"]
				], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 2, "div", [
					["class", "h6 tk-name mb5"]
				], null, null, null, null, null)), (l()(), t.Lb(55, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(57, 0, null, null, 1, "div", [
					["class", "h5 tk-numb color-white"]
				], null, null, null, null, null)), (l()(), t.Lb(58, null, ["", ""])), (l()(), t.rb(59, 0, null, null, 13, "div", [
					["class", "tk-money mt25"]
				], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 2, "div", [
					["class", "tk-money-title h7 mb5"]
				], null, null, null, null, null)), (l()(), t.Lb(61, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(63, 0, null, null, 9, "div", [
					["class", "row row-10 align-items-center"]
				], null, null, null, null, null)), (l()(), t.rb(64, 0, null, null, 3, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(65, 0, null, null, 0, "input", [
					["checked", ""],
					["class", "hidden"],
					["id", "vcb-card-display"],
					["name", ""],
					["type", "checkbox"]
				], null, null, null, null, null)), (l()(), t.rb(66, 0, null, null, 1, "label", [
					["class", "ubtn ubg-white-2 ripple tk-eye"],
					["data-tooltip", "tooltip"],
					["for", "vcb-card-display"]
				], [
					[8, "title", 0]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.AnHienSoTien() && t), t
				}), null, null)), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(68, 0, null, null, 4, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, Vl)), t.qb(70, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, Fl)), t.qb(72, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(73, 0, null, null, 0, "div", [
					["class", "item-link-arrow ubg-white-2"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.goChiTietTaiKhoan() && t), t
				}), null, null)), (l()(), t.rb(74, 0, null, null, 9, "div", [
					["class", "ubtn-wrap-width-full"]
				], null, null, null, null, null)), (l()(), t.rb(75, 0, null, null, 8, "a", [
					["class", "ubtn ubg-secondary ubg-shadow ubtn-lg ripple btn-phone no-m"],
					["href", "tel:1900545413"]
				], null, null, null, null, null)), (l()(), t.rb(76, 0, null, null, 7, "span", [
					["class", "ubtn-text text-left"]
				], null, null, null, null, null)), (l()(), t.rb(77, 0, null, null, 2, "div", [
					["class", "color-white-3 h7 mb5"]
				], null, null, null, null, null)), (l()(), t.Lb(78, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.gb(16777216, null, null, 1, null, Hl)), t.qb(81, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, Yl)), t.qb(83, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(84, 0, null, null, 28, "div", [
					["class", "box box--sm box--light box--link no-p"]
				], null, null, null, null, null)), (l()(), t.rb(85, 0, null, null, 27, "div", [
					["class", "list-link list-link-sm"]
				], null, null, null, null, null)), (l()(), t.rb(86, 0, null, null, 8, "a", [
					["class", "list-link-item has-link-arrow"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 87).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(87, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(88, 0, null, null, 5, "div", [
					["class", "table"]
				], null, null, null, null, null)), (l()(), t.rb(89, 0, null, null, 1, "div", [
					["class", "td ic"]
				], null, null, null, null, null)), (l()(), t.rb(90, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/icons/white/ic_doingoaite.svg"]
				], null, null, null, null, null)), (l()(), t.rb(91, 0, null, null, 2, "div", [
					["class", "txt color-white"]
				], null, null, null, null, null)), (l()(), t.Lb(92, null, [" ", " "])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(94, 0, null, null, 0, "div", [
					["class", "item-link-arrow ubg-white-2"]
				], null, null, null, null, null)), (l()(), t.rb(95, 0, null, null, 8, "a", [
					["class", "list-link-item has-link-arrow"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 96).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(96, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(97, 0, null, null, 5, "div", [
					["class", "table"]
				], null, null, null, null, null)), (l()(), t.rb(98, 0, null, null, 1, "div", [
					["class", "td ic"]
				], null, null, null, null, null)), (l()(), t.rb(99, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/icons/white/ic_lai-tiet-kiem.svg"]
				], null, null, null, null, null)), (l()(), t.rb(100, 0, null, null, 2, "div", [
					["class", "txt color-white"]
				], null, null, null, null, null)), (l()(), t.Lb(101, null, [" ", " "])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(103, 0, null, null, 0, "div", [
					["class", "item-link-arrow ubg-white-2"]
				], null, null, null, null, null)), (l()(), t.rb(104, 0, null, null, 8, "a", [
					["class", "list-link-item has-link-arrow"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 105).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(105, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(106, 0, null, null, 5, "div", [
					["class", "table"]
				], null, null, null, null, null)), (l()(), t.rb(107, 0, null, null, 1, "div", [
					["class", "td ic"]
				], null, null, null, null, null)), (l()(), t.rb(108, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/icons/white/ic_calendar.svg"]
				], null, null, null, null, null)), (l()(), t.rb(109, 0, null, null, 2, "div", [
					["class", "txt color-white"]
				], null, null, null, null, null)), (l()(), t.Lb(110, null, [" ", " "])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(112, 0, null, null, 0, "div", [
					["class", "item-link-arrow ubg-white-2"]
				], null, null, null, null, null))], (function(l, n) {
					var u = n.component;
					l(n, 6, 0, t.vb(1, "/", u.checksum, "")), l(n, 12, 0, "" !== u.avatarUrl), l(n, 14, 0, "" === u.avatarUrl), l(n, 21, 0, "VIP" !== u.currentUser.cusLevel), l(n, 23, 0, "VIP" === u.currentUser.cusLevel), l(n, 29, 0, "" !== u.avatarUrl), l(n, 48, 0, t.vb(1, "/thongtintaikhoan/danhsachtaikhoan/", u.checksum, "")), l(n, 70, 0, !u.showBalance), l(n, 72, 0, u.showBalance), l(n, 81, 0, "VIP" === u.currentUser.cusLevel), l(n, 83, 0, "VIP" !== u.currentUser.cusLevel), l(n, 87, 0, t.vb(1, "/cong-cu-tinh-toan/tra-cuu-ti-gia/", u.checksum, "")), l(n, 96, 0, t.vb(1, "/cong-cu-tinh-toan/tinh-lai-tk/", u.checksum, "")), l(n, 105, 0, t.vb(1, "/cong-cu-tinh-toan/tinh-lich-tra-no/", u.checksum, ""))
				}), (function(l, n) {
					var u = n.component;
					l(n, 5, 0, t.Db(n, 6).target, t.Db(n, 6).href), l(n, 25, 0, t.Mb(n, 25, 0, t.Db(n, 26).transform("change_avatar"))), l(n, 31, 0, t.Mb(n, 31, 0, t.Db(n, 32).transform("xin_chao"))), l(n, 34, 0, u.currentUser.cus_name), l(n, 36, 0, t.Mb(n, 36, 0, t.Db(n, 37).transform("last_login"))), l(n, 39, 0, u.currentUser.lastLogin), l(n, 44, 0, t.Mb(n, 44, 0, t.Db(n, 45).transform("danh_sach_tk"))), l(n, 47, 0, t.Db(n, 48).target, t.Db(n, 48).href), l(n, 49, 0, t.Mb(n, 49, 0, t.Db(n, 50).transform("chi_tiet"))), l(n, 55, 0, t.Mb(n, 55, 0, t.Db(n, 56).transform("tk_thanh_toan"))), l(n, 58, 0, u.currentUser.defaultAccount), l(n, 61, 0, t.Mb(n, 61, 0, t.Db(n, 62).transform("so_du"))), l(n, 66, 0, t.Mb(n, 66, 0, t.Db(n, 67).transform("an_hien_so_tien"))), l(n, 78, 0, t.Mb(n, 78, 0, t.Db(n, 79).transform("dicu_vu_khach_hang_247"))), l(n, 86, 0, t.Db(n, 87).target, t.Db(n, 87).href), l(n, 92, 0, t.Mb(n, 92, 0, t.Db(n, 93).transform("chuyen_doi_ngoai_te"))), l(n, 95, 0, t.Db(n, 96).target, t.Db(n, 96).href), l(n, 101, 0, t.Mb(n, 101, 0, t.Db(n, 102).transform("tinh_lai_tiet_kiem"))), l(n, 104, 0, t.Db(n, 105).target, t.Db(n, 105).href), l(n, 110, 0, t.Mb(n, 110, 0, t.Db(n, 111).transform("tinh_lich_tra_no")))
				}))
			}

			function Gl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 0, "div", [
					["class", "menu-profile-img"]
				], [
					[4, "background-image", null]
				], null, null, null, null))], null, (function(l, n) {
					l(n, 0, 0, "url(" + n.component.avatarUrl + ")")
				}))
			}

			function Ql(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 0, "div", [
					["class", "menu-profile-img"]
				], null, null, null, null, null))], null, null)
			}

			function $l(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 4, "div", [
					["class", "modal-body"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 0, "div", [
					["class", "success-ic circle ubg-green circle-lg"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 2, "p", [
					["class", "no-m"]
				], null, null, null, null, null)), (l()(), t.Lb(3, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h])], null, (function(l, n) {
					l(n, 3, 0, t.Mb(n, 3, 0, t.Db(n, 4).transform("delete_avatar_success")))
				}))
			}

			function zl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 4, "div", [
					["class", "modal-body"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 0, "div", [
					["class", "error-ic circle ubg-red circle-lg"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 2, "p", [
					["class", "no-m"]
				], null, null, null, null, null)), (l()(), t.Lb(3, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h])], null, (function(l, n) {
					l(n, 3, 0, t.Mb(n, 3, 0, t.Db(n, 4).transform("delete_avatar_failed")))
				}))
			}

			function Xl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 400, "div", [], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 0, "input", [
					["class", "hidden"],
					["id", "sidebar-trigger"],
					["type", "checkbox"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "label", [
					["class", "sidebar-overlay"],
					["for", "sidebar-trigger"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 0, "input", [
					["class", "hidden"],
					["id", "sidebar-right-trigger"],
					["type", "checkbox"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 0, "label", [
					["class", "sidebar-overlay"],
					["for", "sidebar-right-trigger"]
				], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 0, "div", [
					["class", "sidebar-right-expand-overlay close-sidebar-left"]
				], null, null, null, null, null)), (l()(), t.rb(6, 0, null, null, 3, "div", [
					["class", "bg"]
				], null, null, null, null, null)), t.Ib(512, null, e.v, e.w, [t.q, t.r, t.k, t.C]), t.qb(8, 278528, null, 0, e.l, [e.v], {
					klass: [0, "klass"],
					ngClass: [1, "ngClass"]
				}, null), t.Eb(9, 1), (l()(), t.rb(10, 0, null, null, 275, "div", [
					["class", "sidebar sidebar-left"]
				], null, null, null, null, null)), (l()(), t.rb(11, 0, null, null, 0, "input", [
					["class", "hidden sidebar-input-trigger"],
					["id", "sidebar-left-close"],
					["name", "sidebar-left-trigger"],
					["type", "radio"]
				], null, null, null, null, null)), (l()(), t.rb(12, 0, null, null, 0, "input", [
					["class", "hidden sidebar-input-trigger"],
					["id", "sidebar1"],
					["name", "sidebar-left-trigger"],
					["type", "radio"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 0, "input", [
					["class", "hidden sidebar-input-trigger"],
					["id", "sidebar2"],
					["name", "sidebar-left-trigger"],
					["type", "radio"]
				], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 0, "label", [
					["class", "sidebar-right-expand-overlay close-sidebar-left"],
					["for", "sidebar-left-close"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 29, "div", [
					["class", "sidebar-mini"]
				], null, null, null, null, null)), (l()(), t.rb(16, 0, null, null, 28, "div", [
					["class", "sidebar-mini__body"]
				], null, null, null, null, null)), (l()(), t.rb(17, 0, null, null, 2, "div", [
					["class", "sidebar-mini__header"]
				], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "label", [
					["class", "ubg-trans sidebar-mobile-back ripple"],
					["for", "sidebar-trigger"]
				], null, null, null, null, null)), (l()(), t.rb(19, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/icons/white/ic-arrow-back.svg"],
					["width", "24"]
				], null, null, null, null, null)), (l()(), t.rb(20, 0, null, null, 5, "div", [
					["class", "sidebar-mini__item sidebar-mini--home active"],
					["data-placement", "right"],
					["data-tooltip", "tooltip"]
				], [
					[1, "data-original-title", 0]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.goHome() && t), t
				}), null, null)), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(22, 0, null, null, 1, "label", [
					["class", "hidden-menu-mobile"],
					["for", "sidebar-left-close"]
				], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/icons/white/ic_home-border.svg"]
				], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "label", [
					["class", "show-menu-mobile"],
					["for", "sidebar-trigger"]
				], null, null, null, null, null)), (l()(), t.rb(25, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/icons/white/ic_home-border.svg"]
				], null, null, null, null, null)), (l()(), t.rb(26, 0, null, null, 2, "label", [
					["class", "sidebar-mini__item"],
					["data-placement", "right"],
					["data-tooltip", "tooltip"],
					["for", "sidebar1"]
				], [
					[1, "data-original-title", 0]
				], null, null, null, null)), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(28, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/icons/white/ic_tien-ich.svg"]
				], null, null, null, null, null)), (l()(), t.rb(29, 0, null, null, 2, "label", [
					["class", "sidebar-mini__item"],
					["data-placement", "right"],
					["data-tooltip", "tooltip"],
					["for", "sidebar2"]
				], [
					[1, "data-original-title", 0]
				], null, null, null, null)), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(31, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/icons/white/ic_caidat.svg"]
				], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 2, "a", [
					["class", "sidebar-mini__item sidebar-mini__item--bot"],
					["data-placement", "right"],
					["data-tooltip", "tooltip"],
					["href", "https://www.vietcombank.com.vn/webmail/"],
					["target", "blank"]
				], [
					[1, "data-original-title", 0]
				], null, null, null, null)), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(34, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/icons/white/ic_lien-he.svg"]
				], null, null, null, null, null)), (l()(), t.rb(35, 0, null, null, 2, "a", [
					["class", "sidebar-mini__item sidebar-mini__item--bot"],
					["data-placement", "right"],
					["data-tooltip", "tooltip"],
					["href", "javascript:void(0)"]
				], [
					[1, "data-original-title", 0],
					[8, "hidden", 0]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.changeLang("en") && t), t
				}), null, null)), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(37, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/img/flag.png"]
				], null, null, null, null, null)), (l()(), t.rb(38, 0, null, null, 2, "a", [
					["class", "sidebar-mini__item sidebar-mini__item--bot"],
					["data-placement", "right"],
					["data-tooltip", "tooltip"],
					["href", "javascript:void(0)"]
				], [
					[1, "data-original-title", 0],
					[8, "hidden", 0]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.changeLang("vi") && t), t
				}), null, null)), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(40, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/img/flag-vi.png"]
				], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 2, "a", [
					["class", "sidebar-mini__item sidebar-mini__item--bot"],
					["data-placement", "right"],
					["data-tooltip", "tooltip"],
					["href", "javascript:void(0)"]
				], [
					[1, "title", 0]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.logout() && t), t
				}), null, null)), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(43, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/web/icons/white/ic_thoat.svg"]
				], null, null, null, null, null)), (l()(), t.rb(44, 0, null, null, 0, "div", [
					["class", "sidebar-mini-active"]
				], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 240, "div", [
					["class", "sidebar-left-content"]
				], null, null, null, null, null)), (l()(), t.rb(46, 0, null, null, 2, "label", [
					["class", "sidebar-left-back-btn close-sidebar-left"],
					["for", "sidebar-left-close"]
				], null, null, null, null, null)), (l()(), t.Lb(47, null, [" ", " "])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(49, 0, null, null, 236, "div", [
					["class", "sidebar-left-inner pv20"]
				], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 167, "div", [
					["class", "sidebar-menu isolated-scroll"],
					["data-accordion-group", ""]
				], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 2, "div", [
					["class", "title up mb20"]
				], null, null, null, null, null)), (l()(), t.Lb(52, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(54, 0, null, null, 18, "div", [
					["class", "sidebar__list"],
					["data-accordion", ""]
				], null, null, null, null, null)), (l()(), t.rb(55, 0, null, null, 5, "div", [
					["class", "sidebar__item table"],
					["data-control", ""]
				], null, null, null, null, null)), (l()(), t.rb(56, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(59, 0, null, null, 1, "div", [
					["class", "ic td"]
				], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 0, "div", [
					["class", "sidebar__dropdown"]
				], null, null, null, null, null)), (l()(), t.rb(61, 0, null, null, 11, "div", [
					["class", "sidebar__sub"],
					["data-content", ""]
				], null, null, null, null, null)), (l()(), t.rb(62, 0, null, null, 10, "div", [
					["class", "sidebar__sub__wrap"]
				], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 64).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(64, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(65, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(66, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(68, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 69).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(69, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(70, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(71, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(73, 0, null, null, 23, "div", [
					["class", "sidebar__list"],
					["data-accordion", ""]
				], null, null, null, null, null)), (l()(), t.rb(74, 0, null, null, 5, "div", [
					["class", "sidebar__item table"],
					["data-control", ""]
				], null, null, null, null, null)), (l()(), t.rb(75, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(76, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(78, 0, null, null, 1, "div", [
					["class", "ic td"]
				], null, null, null, null, null)), (l()(), t.rb(79, 0, null, null, 0, "div", [
					["class", "sidebar__dropdown"]
				], null, null, null, null, null)), (l()(), t.rb(80, 0, null, null, 16, "div", [
					["class", "sidebar__sub"],
					["data-content", ""]
				], null, null, null, null, null)), (l()(), t.rb(81, 0, null, null, 15, "div", [
					["class", "sidebar__sub__wrap"]
				], null, null, null, null, null)), (l()(), t.rb(82, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 83).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(83, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(84, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(85, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(87, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 88).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(88, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(89, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(90, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(92, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 93).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(93, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(94, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(95, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(97, 0, null, null, 17, "div", [
					["class", "sidebar__list"],
					["data-accordion", ""]
				], null, null, null, null, null)), (l()(), t.rb(98, 0, null, null, 4, "div", [
					["class", "sidebar__item table"],
					["data-control", ""]
				], null, null, null, null, null)), (l()(), t.rb(99, 0, null, null, 1, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["SMS Banking"])), (l()(), t.rb(101, 0, null, null, 1, "div", [
					["class", "ic td"]
				], null, null, null, null, null)), (l()(), t.rb(102, 0, null, null, 0, "div", [
					["class", "sidebar__dropdown"]
				], null, null, null, null, null)), (l()(), t.rb(103, 0, null, null, 11, "div", [
					["class", "sidebar__sub"],
					["data-content", ""]
				], null, null, null, null, null)), (l()(), t.rb(104, 0, null, null, 10, "div", [
					["class", "sidebar__sub__wrap"]
				], null, null, null, null, null)), (l()(), t.rb(105, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 106).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(106, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(107, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(108, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(110, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 111).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(111, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(112, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(113, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(115, 0, null, null, 23, "div", [
					["class", "sidebar__list"],
					["data-accordion", ""]
				], null, null, null, null, null)), (l()(), t.rb(116, 0, null, null, 5, "div", [
					["class", "sidebar__item table"],
					["data-control", ""]
				], null, null, null, null, null)), (l()(), t.rb(117, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(118, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(120, 0, null, null, 1, "div", [
					["class", "ic td"]
				], null, null, null, null, null)), (l()(), t.rb(121, 0, null, null, 0, "div", [
					["class", "sidebar__dropdown"]
				], null, null, null, null, null)), (l()(), t.rb(122, 0, null, null, 16, "div", [
					["class", "sidebar__sub"],
					["data-content", ""]
				], null, null, null, null, null)), (l()(), t.rb(123, 0, null, null, 15, "div", [
					["class", "sidebar__sub__wrap"]
				], null, null, null, null, null)), (l()(), t.rb(124, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 125).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(125, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(126, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(127, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(129, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 130).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(130, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(131, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(132, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(134, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 135).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(135, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(136, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(137, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(139, 0, null, null, 23, "div", [
					["class", "sidebar__list"],
					["data-accordion", ""]
				], null, null, null, null, null)), (l()(), t.rb(140, 0, null, null, 5, "div", [
					["class", "sidebar__item table"],
					["data-control", ""]
				], null, null, null, null, null)), (l()(), t.rb(141, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(142, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(144, 0, null, null, 1, "div", [
					["class", "ic td"]
				], null, null, null, null, null)), (l()(), t.rb(145, 0, null, null, 0, "div", [
					["class", "sidebar__dropdown"]
				], null, null, null, null, null)), (l()(), t.rb(146, 0, null, null, 16, "div", [
					["class", "sidebar__sub"],
					["data-content", ""]
				], null, null, null, null, null)), (l()(), t.rb(147, 0, null, null, 15, "div", [
					["class", "sidebar__sub__wrap"]
				], null, null, null, null, null)), (l()(), t.rb(148, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 149).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(149, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(150, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(151, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(153, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 154).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(154, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(155, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(156, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(158, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 159).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(159, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(160, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(161, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(163, 0, null, null, 12, "div", [
					["class", "sidebar__list"],
					["data-accordion", ""]
				], null, null, null, null, null)), (l()(), t.rb(164, 0, null, null, 4, "div", [
					["class", "sidebar__item table"],
					["data-control", ""]
				], null, null, null, null, null)), (l()(), t.rb(165, 0, null, null, 1, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Phone Banking"])), (l()(), t.rb(167, 0, null, null, 1, "div", [
					["class", "ic td"]
				], null, null, null, null, null)), (l()(), t.rb(168, 0, null, null, 0, "div", [
					["class", "sidebar__dropdown"]
				], null, null, null, null, null)), (l()(), t.rb(169, 0, null, null, 6, "div", [
					["class", "sidebar__sub"],
					["data-content", ""]
				], null, null, null, null, null)), (l()(), t.rb(170, 0, null, null, 5, "div", [
					["class", "sidebar__sub__wrap"]
				], null, null, null, null, null)), (l()(), t.rb(171, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 172).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(172, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(173, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(174, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(176, 0, null, null, 41, "div", [
					["class", "sidebar__list"],
					["data-accordion", ""]
				], null, null, null, null, null)), (l()(), t.rb(177, 0, null, null, 5, "div", [
					["class", "sidebar__item table"],
					["data-control", ""]
				], null, null, null, null, null)), (l()(), t.rb(178, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(179, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(181, 0, null, null, 1, "div", [
					["class", "ic td"]
				], null, null, null, null, null)), (l()(), t.rb(182, 0, null, null, 0, "div", [
					["class", "sidebar__dropdown"]
				], null, null, null, null, null)), (l()(), t.rb(183, 0, null, null, 34, "div", [
					["class", "sidebar__sub"],
					["data-content", ""]
				], null, null, null, null, null)), (l()(), t.rb(184, 0, null, null, 33, "div", [
					["class", "sidebar__sub__wrap"]
				], null, null, null, null, null)), (l()(), t.rb(185, 0, null, null, 5, "a", [
					["class", "sidebar__item table"],
					["target", "_blank"]
				], [
					[8, "href", 4]
				], null, null, null, null)), t.Gb(186, {
					domain: 0
				}), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(188, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(189, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(191, 0, null, null, 5, "a", [
					["class", "sidebar__item table"],
					["target", "_blank"]
				], [
					[8, "href", 4]
				], null, null, null, null)), t.Gb(192, {
					domain: 0
				}), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(194, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(195, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(197, 0, null, null, 5, "a", [
					["class", "sidebar__item table"],
					["target", "_blank"]
				], [
					[8, "href", 4]
				], null, null, null, null)), t.Gb(198, {
					domain: 0
				}), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(200, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(201, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(203, 0, null, null, 4, "a", [
					["class", "sidebar__item table show-menu-mobile"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 204).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(204, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(205, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(206, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(208, 0, null, null, 4, "a", [
					["class", "sidebar__item table show-menu-mobile"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 209).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(209, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(210, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(211, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(213, 0, null, null, 4, "a", [
					["class", "sidebar__item table show-menu-mobile"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 214).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(214, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(215, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(216, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(218, 0, null, null, 67, "div", [
					["class", "sidebar-menu isolated-scroll"]
				], null, null, null, null, null)), (l()(), t.rb(219, 0, null, null, 2, "div", [
					["class", "title up mb20"]
				], null, null, null, null, null)), (l()(), t.Lb(220, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(222, 0, null, null, 23, "div", [
					["class", "sidebar__list"],
					["data-accordion", ""]
				], null, null, null, null, null)), (l()(), t.rb(223, 0, null, null, 5, "div", [
					["class", "sidebar__item table"],
					["data-control", ""]
				], null, null, null, null, null)), (l()(), t.rb(224, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(225, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(227, 0, null, null, 1, "div", [
					["class", "ic td"]
				], null, null, null, null, null)), (l()(), t.rb(228, 0, null, null, 0, "div", [
					["class", "sidebar__dropdown"]
				], null, null, null, null, null)), (l()(), t.rb(229, 0, null, null, 16, "div", [
					["class", "sidebar__sub"],
					["data-content", ""]
				], null, null, null, null, null)), (l()(), t.rb(230, 0, null, null, 15, "div", [
					["class", "sidebar__sub__wrap"]
				], null, null, null, null, null)), (l()(), t.rb(231, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"],
					["routerLink", "/caidat/quan-ly-danh-ba/danh-ba-thu-huong"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 232).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(232, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(233, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(234, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(236, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["routerLink", "/caidat/quan-ly-danh-ba/danh-ba-hoa-don"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 237).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(237, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(238, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(239, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(241, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["routerLink", "/caidat/quan-ly-danh-ba/danh-ba-nap-tien-dien-tu"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 242).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(242, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(243, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(244, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(246, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"],
					["routerLink", "/caidat/caidathanmucct"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 247).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(247, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(248, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(249, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(251, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"],
					["routerLink", "/caidat/caidatnhacungcap"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 252).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(252, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(253, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(254, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(256, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"],
					["routerLink", "/caidat/caidattaikhoanthuphi"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 257).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(257, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(258, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(259, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(261, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"],
					["routerLink", "/caidat/cai-dat-ptxt"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 262).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(262, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(263, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(264, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(266, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 267).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(267, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(268, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(269, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(271, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"],
					["routerLink", "/caidat/cai-dat-chuc-nang-noi-bat"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 272).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(272, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(273, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(274, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(276, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 277).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(277, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(278, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(279, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(281, 0, null, null, 4, "a", [
					["class", "sidebar__item table"],
					["href", "javascript:void(0)"],
					["routerLink", "/caidat/doimatkhau"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 282).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(282, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(283, 0, null, null, 2, "div", [
					["class", "text td"]
				], null, null, null, null, null)), (l()(), t.Lb(284, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.gb(16777216, null, null, 1, null, Jl)), t.qb(287, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(288, 0, null, null, 18, "header", [
					["class", "menu"]
				], null, null, null, null, null)), (l()(), t.rb(289, 0, null, null, 17, "div", [
					["class", "menu__wrap"]
				], null, null, null, null, null)), (l()(), t.rb(290, 0, null, null, 3, "a", [
					["class", "menu__logo"],
					["href", "javascript:void(0)"],
					["routerLink", "/"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 291).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(291, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(292, 0, null, null, 1, "div", [
					["class", "menu__item__block no-p"]
				], null, null, null, null, null)), (l()(), t.rb(293, 0, null, null, 0, "img", [
					["alt", ""],
					["class", "menu__logo__logo"],
					["src", "./assets/images/logo-white-type-2.svg"]
				], null, null, null, null, null)), (l()(), t.rb(294, 0, null, null, 12, "div", [
					["class", "menu__mobile"]
				], null, null, null, null, null)), (l()(), t.rb(295, 0, null, null, 2, "div", [
					["class", "menu__mobile__item menu__mobile__ic"]
				], null, null, null, null, null)), (l()(), t.rb(296, 0, null, null, 1, "label", [
					["class", "menu__ic-box ripple-100"],
					["for", "sidebar-trigger"]
				], null, null, null, null, null)), (l()(), t.rb(297, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "./assets/images/web/icons/white/ic_drawer.svg"],
					["width", "24"]
				], null, null, null, null, null)), (l()(), t.rb(298, 0, null, null, 2, "a", [
					["class", "menu__mobile__item menu__mobile__logo"],
					["routerLink", "/"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 299).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(299, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(300, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "./assets/images/logo-digibank-white.svg"]
				], null, null, null, null, null)), (l()(), t.rb(301, 0, null, null, 5, "div", [
					["class", "menu__mobile__item menu__mobile__ic"]
				], null, null, null, null, null)), (l()(), t.rb(302, 0, null, null, 4, "label", [
					["class", "menu__ic-box ripple-100"],
					["for", "sidebar-right-trigger"]
				], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, Gl)), t.qb(304, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, Ql)), t.qb(306, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(307, 0, null, null, 2, "div", [
					["class", "content"]
				], null, null, null, null, null)), (l()(), t.rb(308, 16777216, null, null, 1, "router-outlet", [], null, [
					[null, "activate"]
				], (function(l, n, u) {
					var t = !0;
					return "activate" === n && (t = !1 !== l.component.onActivate(u) && t), t
				}), null, null)), t.qb(309, 212992, null, 0, a.r, [a.b, t.N, t.j, [8, null], t.h], null, {
					activateEvents: "activate"
				}), (l()(), t.rb(310, 0, null, null, 48, "footer", [], null, null, null, null, null)), (l()(), t.rb(311, 0, null, null, 47, "div", [
					["class", "row row-10 justify-content-center"]
				], null, null, null, null, null)), (l()(), t.rb(312, 0, null, null, 5, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(313, 0, null, null, 4, "a", [
					["routerLink", "/"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 314).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(314, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(315, 0, null, null, 2, "div", [
					["class", "footer-item color-white-3 hover-line hover-c"]
				], null, null, null, null, null)), (l()(), t.Lb(316, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(318, 0, null, null, 1, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["|"])), (l()(), t.rb(320, 0, null, null, 6, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(321, 0, null, null, 5, "a", [
					["target", "_blank"]
				], [
					[8, "href", 4]
				], null, null, null, null)), t.Gb(322, {
					domain: 0
				}), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(324, 0, null, null, 2, "div", [
					["class", "footer-item color-white-3 hover-line hover-c"]
				], null, null, null, null, null)), (l()(), t.Lb(325, null, [" ", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(327, 0, null, null, 1, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["|"])), (l()(), t.rb(329, 0, null, null, 6, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(330, 0, null, null, 5, "a", [
					["target", "_blank"]
				], [
					[8, "href", 4]
				], null, null, null, null)), t.Gb(331, {
					domain: 0
				}), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(333, 0, null, null, 2, "div", [
					["class", "footer-item color-white-3 hover-line hover-c"]
				], null, null, null, null, null)), (l()(), t.Lb(334, null, [" ", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(336, 0, null, null, 1, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["|"])), (l()(), t.rb(338, 0, null, null, 6, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(339, 0, null, null, 5, "a", [
					["target", "_blank"]
				], [
					[8, "href", 4]
				], null, null, null, null)), t.Gb(340, {
					domain: 0
				}), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(342, 0, null, null, 2, "div", [
					["class", "footer-item color-white-3 hover-line hover-c"]
				], null, null, null, null, null)), (l()(), t.Lb(343, null, ["", " "])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(345, 0, null, null, 1, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["|"])), (l()(), t.rb(347, 0, null, null, 6, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(348, 0, null, null, 5, "a", [
					["target", "_blank"]
				], [
					[8, "href", 4]
				], null, null, null, null)), t.Gb(349, {
					domain: 0
				}), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(351, 0, null, null, 2, "div", [
					["class", "footer-item color-white-3 hover-line hover-c"]
				], null, null, null, null, null)), (l()(), t.Lb(352, null, ["", " "])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(354, 0, null, null, 4, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(355, 0, null, null, 3, "a", [
					["href", "javascript:void(0)"]
				], [
					[1, "target", 0],
					[8, "href", 4]
				], [
					[null, "click"]
				], (function(l, n, u) {
					var e = !0;
					return "click" === n && (e = !1 !== t.Db(l, 356).onClick(u.button, u.ctrlKey, u.metaKey, u.shiftKey) && e), e
				}), null, null)), t.qb(356, 671744, null, 0, a.p, [a.m, a.a, e.j], {
					routerLink: [0, "routerLink"]
				}, null), (l()(), t.rb(357, 0, null, null, 1, "div", [
					["class", "footer-item color-white-3 hover-line hover-c"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0\xa0\xa0"])), (l()(), t.rb(359, 0, null, null, 1, "app-modal-bene", [], null, null, null, k, b)), t.qb(360, 245760, null, 0, o, [c.a], null, null), (l()(), t.rb(361, 0, null, null, 1, "app-modal-receipt-print", [], null, null, null, wl, Nl)), t.qb(362, 245760, null, 0, yl, [t.j, kl.a, Ll.a], null, null), (l()(), t.rb(363, 0, null, null, 13, "div", [
					["aria-hidden", "true"],
					["aria-labelledby", "exampleModalLabel"],
					["class", "modal modal--countdown fade"],
					["id", "modal-success-avatar"],
					["role", "dialog"],
					["tabindex", "-1"]
				], null, null, null, null, null)), (l()(), t.rb(364, 0, null, null, 12, "div", [
					["class", "modal-dialog modal-dialog-centered modal-xs"],
					["role", "document"]
				], null, null, null, null, null)), (l()(), t.rb(365, 0, null, null, 11, "div", [
					["class", "modal-content text-center"]
				], null, null, null, null, null)), (l()(), t.rb(366, 0, null, null, 2, "div", [
					["class", "modal-header justify-content-center"]
				], null, null, null, null, null)), (l()(), t.rb(367, 0, null, null, 1, "button", [
					["class", "ubtn ubg-blank ubtn-circle-md modal-close ripple-100 legitRipple"],
					["data-dismiss", "modal"],
					["type", "button"]
				], null, null, null, null, null)), (l()(), t.rb(368, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/base/icons/close/square/base.svg"]
				], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, $l)), t.qb(370, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, zl)), t.qb(372, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(373, 0, null, null, 3, "div", [
					["class", "modal-footer justify-content-center"]
				], null, null, null, null, null)), (l()(), t.rb(374, 0, null, null, 2, "div", [
					["class", "row row-15"]
				], null, null, null, null, null)), (l()(), t.rb(375, 0, null, null, 1, "div", [
					["class", "inline-block h6"]
				], [
					[8, "innerHTML", 1]
				], null, null, null, null)), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(377, 0, null, null, 23, "div", [
					["aria-hidden", "true"],
					["aria-labelledby", "exampleModalLabel"],
					["class", "modal"],
					["id", "modal-profile"],
					["role", "dialog"],
					["tabindex", "-1"]
				], null, null, null, null, null)), (l()(), t.rb(378, 0, null, null, 22, "div", [
					["class", "modal-dialog modal-dialog-centered modal-sm modal-dialog-scrollable"],
					["role", "document"]
				], null, null, null, null, null)), (l()(), t.rb(379, 0, null, null, 21, "div", [
					["class", "modal-content"]
				], null, null, null, null, null)), (l()(), t.rb(380, 0, null, null, 5, "div", [
					["class", "modal-header"]
				], null, null, null, null, null)), (l()(), t.rb(381, 0, null, null, 2, "h2", [
					["class", "modal-title"]
				], null, null, null, null, null)), (l()(), t.Lb(382, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(384, 0, null, null, 1, "button", [
					["class", "ubtn ubg-blank ubtn-circle-md modal-close ripple-100 legitRipple"],
					["data-dismiss", "modal"],
					["type", "button"]
				], null, null, null, null, null)), (l()(), t.rb(385, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "assets/images/base/icons/close/square/base.svg"]
				], null, null, null, null, null)), (l()(), t.rb(386, 0, null, null, 2, "div", [
					["class", "modal-body isolated-scroll text-center"]
				], null, null, null, null, null)), (l()(), t.rb(387, 0, null, null, 1, "image-cropper", [
					["format", "png"]
				], [
					[4, "text-align", null],
					[2, "disabled", null]
				], [
					[null, "imageCropped"],
					[null, "imageLoaded"],
					[null, "cropperReady"],
					[null, "loadImageFailed"],
					["window", "resize"],
					["document", "mousemove"],
					["document", "touchmove"],
					["document", "mouseup"],
					["document", "touchend"]
				], (function(l, n, u) {
					var e = !0,
						r = l.component;
					return "window:resize" === n && (e = !1 !== t.Db(l, 388).onResize() && e), "document:mousemove" === n && (e = !1 !== t.Db(l, 388).moveImg(u) && e), "document:touchmove" === n && (e = !1 !== t.Db(l, 388).moveImg(u) && e), "document:mouseup" === n && (e = !1 !== t.Db(l, 388).moveStop() && e), "document:touchend" === n && (e = !1 !== t.Db(l, 388).moveStop() && e), "imageCropped" === n && (e = !1 !== r.imageCropped(u) && e), "imageLoaded" === n && (e = !1 !== r.imageLoaded() && e), "cropperReady" === n && (e = !1 !== r.cropperReady() && e), "loadImageFailed" === n && (e = !1 !== r.loadImageFailed() && e), e
				}), Cl.b, Cl.a)), t.qb(388, 638976, null, 0, Tl.a, [Sl.b, t.h], {
					imageChangedEvent: [0, "imageChangedEvent"],
					format: [1, "format"],
					maintainAspectRatio: [2, "maintainAspectRatio"],
					aspectRatio: [3, "aspectRatio"],
					roundCropper: [4, "roundCropper"]
				}, {
					imageCropped: "imageCropped",
					imageLoaded: "imageLoaded",
					cropperReady: "cropperReady",
					loadImageFailed: "loadImageFailed"
				}), (l()(), t.rb(389, 0, null, null, 11, "div", [
					["class", "modal-footer"]
				], null, null, null, null, null)), (l()(), t.rb(390, 0, null, null, 10, "div", [
					["class", "row row-15 list-pv5"]
				], null, null, null, null, null)), (l()(), t.rb(391, 0, null, null, 4, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(392, 0, null, null, 3, "button", [
					["class", "ubtn ubtn-md ubtn-line-primary ripple no-m"],
					["data-dismiss", "modal"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.cancelUploadAvatar() && t), t
				}), null, null)), (l()(), t.rb(393, 0, null, null, 2, "span", [
					["class", "ubtn-text"]
				], null, null, null, null, null)), (l()(), t.Lb(394, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h]), (l()(), t.rb(396, 0, null, null, 4, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(397, 0, null, null, 3, "button", [
					["class", "ubtn ubg-primary ubtn-md ripple no-m"],
					["data-dismiss", "modal"],
					["id", "get-cropped"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.uploadAvatar() && t), t
				}), null, null)), (l()(), t.rb(398, 0, null, null, 2, "span", [
					["class", "ubtn-text"]
				], null, null, null, null, null)), (l()(), t.Lb(399, null, ["", ""])), t.Fb(131072, r.j, [r.k, t.h])], (function(l, n) {
					var u = n.component,
						e = l(n, 9, 0, "bg-" + u.backgroundNumber);
					l(n, 8, 0, "bg", e), l(n, 64, 0, t.vb(1, "/tienich/trasoatonline/laplenhtrasoatonline/", u.checksum, "")), l(n, 69, 0, t.vb(1, "/tienich/trasoatonline/tracuutrasoatonline/", u.checksum, "/all")), l(n, 83, 0, t.vb(1, "/tienich/dangkytrichnotudong/", u.checksum, "/register")), l(n, 88, 0, t.vb(1, "/tienich/thaydoitrichnotudong/", u.checksum, "/change")), l(n, 93, 0, t.vb(1, "/tienich/huytrichnotudong/", u.checksum, "/cancel")), l(n, 106, 0, t.vb(1, "/tienich/smsbanking/ngungdichvu/", u.checksum, "")), l(n, 111, 0, t.vb(1, "/tienich/smsbanking/thaydoitaikhoan/", u.checksum, "")), l(n, 125, 0, t.vb(1, "/tienich/smschudong/kichhoatsms/", u.checksum, "")), l(n, 130, 0, t.vb(1, "/tienich/smschudong/dangkytkknbd/", u.checksum, "")), l(n, 135, 0, t.vb(1, "/tienich/smschudong/dangkybstknbd/", u.checksum, "")), l(n, 149, 0, t.vb(1, "/tienich/vidientu/dangky/", u.checksum, "")), l(n, 154, 0, t.vb(1, "/tienich/vidientu/huydangky/", u.checksum, "")), l(n, 159, 0, t.vb(1, "/tienich/vidientu/thaydoitaikhoan/", u.checksum, "")), l(n, 172, 0, t.vb(1, "/tienich/phonebanking/dangky/", u.checksum, "")), l(n, 204, 0, t.vb(1, "/cong-cu-tinh-toan/tra-cuu-ti-gia/", u.checksum, "")), l(n, 209, 0, t.vb(1, "/cong-cu-tinh-toan/tinh-lai-tk/", u.checksum, "")), l(n, 214, 0, t.vb(1, "/cong-cu-tinh-toan/tinh-lich-tra-no/", u.checksum, "")), l(n, 232, 0, "/caidat/quan-ly-danh-ba/danh-ba-thu-huong"), l(n, 237, 0, "/caidat/quan-ly-danh-ba/danh-ba-hoa-don"), l(n, 242, 0, "/caidat/quan-ly-danh-ba/danh-ba-nap-tien-dien-tu"), l(n, 247, 0, "/caidat/caidathanmucct"), l(n, 252, 0, "/caidat/caidatnhacungcap"), l(n, 257, 0, "/caidat/caidattaikhoanthuphi"), l(n, 262, 0, "/caidat/cai-dat-ptxt"), l(n, 267, 0, t.vb(1, "/caidat/cai-dat-dang-nhap/", u.checksum, "")), l(n, 272, 0, "/caidat/cai-dat-chuc-nang-noi-bat"), l(n, 277, 0, t.vb(1, "/caidat/doi-hinh-nen/", u.checksum, "")), l(n, 282, 0, "/caidat/doimatkhau"), l(n, 287, 0, u.currentUser), l(n, 291, 0, "/"), l(n, 299, 0, "/"), l(n, 304, 0, "" !== u.avatarUrl), l(n, 306, 0, "" === u.avatarUrl), l(n, 309, 0), l(n, 314, 0, "/"), l(n, 356, 0, t.vb(1, "/quick-test/", u.checksum, "")), l(n, 360, 0), l(n, 362, 0), l(n, 370, 0, u.deleteAvatarSuccess), l(n, 372, 0, !u.deleteAvatarSuccess), l(n, 388, 0, u.imageChangedEvent, "png", !0, 4 / 3, !0)
				}), (function(l, n) {
					var u = n.component;
					l(n, 20, 0, t.Mb(n, 20, 0, t.Db(n, 21).transform("app.home"))), l(n, 26, 0, t.Mb(n, 26, 0, t.Db(n, 27).transform("app.utilities"))), l(n, 29, 0, t.Mb(n, 29, 0, t.Db(n, 30).transform("app.settings"))), l(n, 32, 0, t.Mb(n, 32, 0, t.Db(n, 33).transform("app.contact"))), l(n, 35, 0, t.Mb(n, 35, 0, t.Db(n, 36).transform("app.lang.en_title")), "en" === u.lang), l(n, 38, 0, t.Mb(n, 38, 0, t.Db(n, 39).transform("app.lang.vi_title")), "vi" === u.lang), l(n, 41, 0, t.Mb(n, 41, 0, t.Db(n, 42).transform("app.logout"))), l(n, 47, 0, t.Mb(n, 47, 0, t.Db(n, 48).transform("left_menu.back_button"))), l(n, 52, 0, t.Mb(n, 52, 0, t.Db(n, 53).transform("tien_ich_gia_tang"))), l(n, 57, 0, t.Mb(n, 57, 0, t.Db(n, 58).transform("tra_soat_online"))), l(n, 63, 0, t.Db(n, 64).target, t.Db(n, 64).href), l(n, 66, 0, t.Mb(n, 66, 0, t.Db(n, 67).transform("lap_yeu_cau_tra_soat"))), l(n, 68, 0, t.Db(n, 69).target, t.Db(n, 69).href), l(n, 71, 0, t.Mb(n, 71, 0, t.Db(n, 72).transform("tra_cuu_yeu_cau_tra_soat"))), l(n, 76, 0, t.Mb(n, 76, 0, t.Db(n, 77).transform("auto_debit"))), l(n, 82, 0, t.Db(n, 83).target, t.Db(n, 83).href), l(n, 85, 0, t.Mb(n, 85, 0, t.Db(n, 86).transform("auto_debit_dang_ky"))), l(n, 87, 0, t.Db(n, 88).target, t.Db(n, 88).href), l(n, 90, 0, t.Mb(n, 90, 0, t.Db(n, 91).transform("auto_debit_doi_tk"))), l(n, 92, 0, t.Db(n, 93).target, t.Db(n, 93).href), l(n, 95, 0, t.Mb(n, 95, 0, t.Db(n, 96).transform("auto_debit_ngung_dich_vu"))), l(n, 105, 0, t.Db(n, 106).target, t.Db(n, 106).href), l(n, 108, 0, t.Mb(n, 108, 0, t.Db(n, 109).transform("sms_banking_ngung_dich_vu"))), l(n, 110, 0, t.Db(n, 111).target, t.Db(n, 111).href), l(n, 113, 0, t.Mb(n, 113, 0, t.Db(n, 114).transform("sms_banking_thay_doi_so_tk"))), l(n, 118, 0, t.Mb(n, 118, 0, t.Db(n, 119).transform("sms_chu_dong"))), l(n, 124, 0, t.Db(n, 125).target, t.Db(n, 125).href), l(n, 127, 0, t.Mb(n, 127, 0, t.Db(n, 128).transform("sms_chu_dong_kich_hoat"))), l(n, 129, 0, t.Db(n, 130).target, t.Db(n, 130).href), l(n, 132, 0, t.Mb(n, 132, 0, t.Db(n, 133).transform("sms_chu_dong_dang_ky_tk_khong_nhan"))), l(n, 134, 0, t.Db(n, 135).target, t.Db(n, 135).href), l(n, 137, 0, t.Mb(n, 137, 0, t.Db(n, 138).transform("sms_chu_dong_dang_ky_tk_nhan"))), l(n, 142, 0, t.Mb(n, 142, 0, t.Db(n, 143).transform("vi_dien_tu"))), l(n, 148, 0, t.Db(n, 149).target, t.Db(n, 149).href), l(n, 151, 0, t.Mb(n, 151, 0, t.Db(n, 152).transform("vi_dien_tu_dang_ky"))), l(n, 153, 0, t.Db(n, 154).target, t.Db(n, 154).href), l(n, 156, 0, t.Mb(n, 156, 0, t.Db(n, 157).transform("vi_dien_tu_ngung_dich_vu"))), l(n, 158, 0, t.Db(n, 159).target, t.Db(n, 159).href), l(n, 161, 0, t.Mb(n, 161, 0, t.Db(n, 162).transform("vi_dien_tu_thay_doi_so_tk"))), l(n, 171, 0, t.Db(n, 172).target, t.Db(n, 172).href), l(n, 174, 0, t.Mb(n, 174, 0, t.Db(n, 175).transform("phone_banking_dang_ky"))), l(n, 179, 0, t.Mb(n, 179, 0, t.Db(n, 180).transform("ho_tro")));
					var e = t.vb(1, "", t.Mb(n, 185, 0, t.Db(n, 187).transform("app.links.user_guide", l(n, 186, 0, u.env.mediaBaseUrl))), "");
					l(n, 185, 0, e), l(n, 189, 0, t.Mb(n, 189, 0, t.Db(n, 190).transform("app.links.user_guide_label")));
					var r = t.vb(1, "", t.Mb(n, 191, 0, t.Db(n, 193).transform("app.links.faq", l(n, 192, 0, u.env.mediaBaseUrl))), "");
					l(n, 191, 0, r), l(n, 195, 0, t.Mb(n, 195, 0, t.Db(n, 196).transform("app.links.faq_label")));
					var a = t.vb(1, "", t.Mb(n, 197, 0, t.Db(n, 199).transform("app.links.safe_guide", l(n, 198, 0, u.env.mediaBaseUrl))), "");
					l(n, 197, 0, a), l(n, 201, 0, t.Mb(n, 201, 0, t.Db(n, 202).transform("app.links.safe_guide_label"))), l(n, 203, 0, t.Db(n, 204).target, t.Db(n, 204).href), l(n, 206, 0, t.Mb(n, 206, 0, t.Db(n, 207).transform("chuyen_doi_ngoai_te"))), l(n, 208, 0, t.Db(n, 209).target, t.Db(n, 209).href), l(n, 211, 0, t.Mb(n, 211, 0, t.Db(n, 212).transform("tinh_lai_tiet_kiem"))), l(n, 213, 0, t.Db(n, 214).target, t.Db(n, 214).href), l(n, 216, 0, t.Mb(n, 216, 0, t.Db(n, 217).transform("tinh_lich_tra_no"))), l(n, 220, 0, t.Mb(n, 220, 0, t.Db(n, 221).transform("cai_dat"))), l(n, 225, 0, t.Mb(n, 225, 0, t.Db(n, 226).transform("quan_ly_danh_ba"))), l(n, 231, 0, t.Db(n, 232).target, t.Db(n, 232).href), l(n, 234, 0, t.Mb(n, 234, 0, t.Db(n, 235).transform("danh_ba_thu_huong"))), l(n, 236, 0, t.Db(n, 237).target, t.Db(n, 237).href), l(n, 239, 0, t.Mb(n, 239, 0, t.Db(n, 240).transform("danh_ba_hoa_don"))), l(n, 241, 0, t.Db(n, 242).target, t.Db(n, 242).href), l(n, 244, 0, t.Mb(n, 244, 0, t.Db(n, 245).transform("danh_ba_nap_tien_dien_tu"))), l(n, 246, 0, t.Db(n, 247).target, t.Db(n, 247).href), l(n, 249, 0, t.Mb(n, 249, 0, t.Db(n, 250).transform("cai_dat_han_muc_chuyen_tien"))), l(n, 251, 0, t.Db(n, 252).target, t.Db(n, 252).href), l(n, 254, 0, t.Mb(n, 254, 0, t.Db(n, 255).transform("cai_dat_nha_cung_cap"))), l(n, 256, 0, t.Db(n, 257).target, t.Db(n, 257).href), l(n, 259, 0, t.Mb(n, 259, 0, t.Db(n, 260).transform("cai_dat_tk_thu_phi"))), l(n, 261, 0, t.Db(n, 262).target, t.Db(n, 262).href), l(n, 264, 0, t.Mb(n, 264, 0, t.Db(n, 265).transform("cai_dat_phuong_thuc_xac_thuc"))), l(n, 266, 0, t.Db(n, 267).target, t.Db(n, 267).href), l(n, 269, 0, t.Mb(n, 269, 0, t.Db(n, 270).transform("cai_dat_dang_nhap"))), l(n, 271, 0, t.Db(n, 272).target, t.Db(n, 272).href), l(n, 274, 0, t.Mb(n, 274, 0, t.Db(n, 275).transform("cai_dat_tinh_nang_yeu_thich"))), l(n, 276, 0, t.Db(n, 277).target, t.Db(n, 277).href), l(n, 279, 0, t.Mb(n, 279, 0, t.Db(n, 280).transform("doi_hinh_nen"))), l(n, 281, 0, t.Db(n, 282).target, t.Db(n, 282).href), l(n, 284, 0, t.Mb(n, 284, 0, t.Db(n, 285).transform("doi_mat_khau"))), l(n, 290, 0, t.Db(n, 291).target, t.Db(n, 291).href), l(n, 298, 0, t.Db(n, 299).target, t.Db(n, 299).href), l(n, 313, 0, t.Db(n, 314).target, t.Db(n, 314).href), l(n, 316, 0, t.Mb(n, 316, 0, t.Db(n, 317).transform("app.home")));
					var i = t.vb(1, "", t.Mb(n, 321, 0, t.Db(n, 323).transform("app.links.terms_and_conditions", l(n, 322, 0, u.env.mediaBaseUrl))), "");
					l(n, 321, 0, i), l(n, 325, 0, t.Mb(n, 325, 0, t.Db(n, 326).transform("app.links.terms_and_conditions_label")));
					var s = t.vb(1, "", t.Mb(n, 330, 0, t.Db(n, 332).transform("app.links.fees_and_charges", l(n, 331, 0, u.env.mediaBaseUrl))), "");
					l(n, 330, 0, s), l(n, 334, 0, t.Mb(n, 334, 0, t.Db(n, 335).transform("app.links.fees_and_charges_label")));
					var c = t.vb(1, "", t.Mb(n, 339, 0, t.Db(n, 341).transform("app.links.user_guide", l(n, 340, 0, u.env.mediaBaseUrl))), "");
					l(n, 339, 0, c), l(n, 343, 0, t.Mb(n, 343, 0, t.Db(n, 344).transform("app.links.user_guide_label")));
					var o = t.vb(1, "", t.Mb(n, 348, 0, t.Db(n, 350).transform("app.links.safe_guide", l(n, 349, 0, u.env.mediaBaseUrl))), "");
					l(n, 348, 0, o), l(n, 352, 0, t.Mb(n, 352, 0, t.Db(n, 353).transform("app.links.safe_guide_label"))), l(n, 355, 0, t.Db(n, 356).target, t.Db(n, 356).href), l(n, 375, 0, t.Mb(n, 375, 0, t.Db(n, 376).transform("autoCloseText"))), l(n, 382, 0, t.Mb(n, 382, 0, t.Db(n, 383).transform("update_avatar"))), l(n, 387, 0, t.Db(n, 388).alignImage, t.Db(n, 388).disabled), l(n, 394, 0, t.Mb(n, 394, 0, t.Db(n, 395).transform("app_cancel"))), l(n, 399, 0, t.Mb(n, 399, 0, t.Db(n, 400).transform("app_save")))
				}))
			}

			function Wl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "head", [], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 0, "link", [
					["href", ""],
					["id", "theme"],
					["rel", "stylesheet"]
				], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, Xl)), t.qb(3, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(l, n) {
					l(n, 3, 0, n.component.isLoadedVIP)
				}), null)
			}

			function Zl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, Wl, Pl)), t.qb(1, 245760, null, 0, Il.a, [Dl.a, r.k, Ul.a, a.m, a.a, Al.a, Rl.c, El.a], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var ln = t.nb("ng-component", Il.a, Zl, {}, {}, [])
		},
		FNYY: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("yH/L"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		FUFC: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("P2tI"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		GBX2: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		"GcN+": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("/8/R"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		H4Zk: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		H7XF: function(l, n, u) {
			"use strict";
			n.byteLength = function(l) {
				var n = c(l),
					u = n[1];
				return 3 * (n[0] + u) / 4 - u
			}, n.toByteArray = function(l) {
				var n, u, t = c(l),
					a = t[0],
					i = t[1],
					s = new r(function(l, n, u) {
						return 3 * (n + u) / 4 - u
					}(0, a, i)),
					o = 0,
					b = i > 0 ? a - 4 : a;
				for (u = 0; u < b; u += 4) n = e[l.charCodeAt(u)] << 18 | e[l.charCodeAt(u + 1)] << 12 | e[l.charCodeAt(u + 2)] << 6 | e[l.charCodeAt(u + 3)], s[o++] = n >> 16 & 255, s[o++] = n >> 8 & 255, s[o++] = 255 & n;
				return 2 === i && (n = e[l.charCodeAt(u)] << 2 | e[l.charCodeAt(u + 1)] >> 4, s[o++] = 255 & n), 1 === i && (n = e[l.charCodeAt(u)] << 10 | e[l.charCodeAt(u + 1)] << 4 | e[l.charCodeAt(u + 2)] >> 2, s[o++] = n >> 8 & 255, s[o++] = 255 & n), s
			}, n.fromByteArray = function(l) {
				for (var n, u = l.length, e = u % 3, r = [], a = 0, i = u - e; a < i; a += 16383) r.push(o(l, a, a + 16383 > i ? i : a + 16383));
				return 1 === e ? r.push(t[(n = l[u - 1]) >> 2] + t[n << 4 & 63] + "==") : 2 === e && r.push(t[(n = (l[u - 2] << 8) + l[u - 1]) >> 10] + t[n >> 4 & 63] + t[n << 2 & 63] + "="), r.join("")
			};
			for (var t = [], e = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, s = a.length; i < s; ++i) t[i] = a[i], e[a.charCodeAt(i)] = i;

			function c(l) {
				var n = l.length;
				if (n % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
				var u = l.indexOf("=");
				return -1 === u && (u = n), [u, u === n ? 0 : 4 - u % 4]
			}

			function o(l, n, u) {
				for (var e, r = [], a = n; a < u; a += 3) r.push(t[(e = (l[a] << 16 & 16711680) + (l[a + 1] << 8 & 65280) + (255 & l[a + 2])) >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[63 & e]);
				return r.join("")
			}
			e["-".charCodeAt(0)] = 62, e["_".charCodeAt(0)] = 63
		},
		HmbI: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		HsMu: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("heEX"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		J0em: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		JH0A: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("JdfP"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		JdfP: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		KD2G: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {
					this.isShowClose = !0
				}
				ngOnInit() {}
				ngOnDestroy() {}
			}
		},
		KaRU: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("vfFc"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		"Km+h": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("uGTV"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 136, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 12, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 3, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG B\xc1O D\u1ecaCH V\u1ee4 \u1ee6Y QUY\u1ec0N TR\xcdCH N\u1ee2 T\u1ef0 \u0110\u1ed8NG"])), (l()(), t.rb(10, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" VCB-AUTO DEBIT"])), (l()(), t.rb(12, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(VCB-AUTO DEBIT Notice)"])), (l()(), t.rb(14, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["K\xednh g\u1eedi Qu\xfd kh\xe1ch h\xe0ng,"])), (l()(), t.rb(16, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Dear valued Customer,"])), (l()(), t.rb(18, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\u1ea3m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank. "])), (l()(), t.rb(20, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for choosing Vietcombank\u2019s services."])), (l()(), t.rb(22, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Tr\xe2n tr\u1ecdng th\xf4ng b\xe1o Qu\xfd kh\xe1ch \u0111\xe3 h\u1ee7y \u0111\u0103ng k\xfd th\xe0nh c\xf4ng d\u1ecbch v\u1ee5 \u1ee6y quy\u1ec1n tr\xedch n\u1ee3 t\u1ef1 \u0111\u1ed9ng VCB-Auto Debit v\u1edbi th\xf4ng tin sau \u0111\xe2y:"])), (l()(), t.rb(24, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Please be advised that you\u2019ve sucessfully unregistered VCB-Auto Debit Service as follows: "])), (l()(), t.rb(26, 0, null, null, 101, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(28, 0, null, null, 6, "td", [
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(29, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN T\xc0I KHO\u1ea2N NGU\u1ed2N"])), (l()(), t.rb(31, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["DEBIT ACCOUNT"])), (l()(), t.rb(35, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 5, "td", [
					["width", "300"]
				], null, null, null, null, null)), (l()(), t.rb(37, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 t\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(39, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(40, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit account"])), (l()(), t.rb(42, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(43, null, ["", ""])), (l()(), t.rb(44, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 6, "td", [
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(46, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN \u0110\u0102NG K\xdd"])), (l()(), t.rb(48, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(49, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["DETAILS"])), (l()(), t.rb(52, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(53, 0, null, null, 6, "td", [
					["class", "fontsize1"],
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN NH\xc0 CUNG C\u1ea4P D\u1ecaCH V\u1ee4"])), (l()(), t.rb(56, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(57, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(58, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["SERVICE PROVIDER INFORMATION"])), (l()(), t.rb(60, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), t.rb(61, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(62, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i d\u1ecbch v\u1ee5"])), (l()(), t.rb(64, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(65, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Service"])), (l()(), t.rb(67, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), t.Lb(68, null, [" ", ""])), (l()(), t.rb(69, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(70, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(71, null, ["", ""])), (l()(), t.rb(72, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), t.rb(73, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(74, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean nh\xe0 cung c\u1ea5p d\u1ecbch v\u1ee5"])), (l()(), t.rb(76, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(77, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Service provider "])), (l()(), t.rb(79, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), t.Lb(80, null, [" ", ""])), (l()(), t.rb(81, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(82, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(83, null, ["", ""])), (l()(), t.rb(84, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(85, 0, null, null, 6, "td", [
					["class", "fontsize1"],
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(86, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN KH\xc1CH H\xc0NG"])), (l()(), t.rb(88, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(89, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(90, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["CUSTOMER INFORMATION"])), (l()(), t.rb(92, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(93, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(94, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\xe3 kh\xe1ch h\xe0ng"])), (l()(), t.rb(96, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(97, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Customer code"])), (l()(), t.rb(99, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(100, null, ["", ""])), (l()(), t.rb(101, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(102, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(103, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean \u0111\u01a1n v\u1ecb \u0111i\u1ec7n l\u1ef1c/T\xean \u0111\u01a1n v\u1ecb n\u01b0\u1edbc"])), (l()(), t.rb(105, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(106, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Unit "])), (l()(), t.rb(108, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(109, null, ["", ""])), (l()(), t.rb(110, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(111, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(112, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ch\u1ee7 h\u1ee3p \u0111\u1ed3ng"])), (l()(), t.rb(114, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(115, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Contract holder "])), (l()(), t.rb(117, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(118, null, ["", ""])), (l()(), t.rb(119, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(120, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(121, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ecba ch\u1ec9 "])), (l()(), t.rb(123, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(124, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Address "])), (l()(), t.rb(126, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(127, null, ["", ""])), (l()(), t.rb(128, 0, null, null, 8, "div", [], null, null, null, null, null)), (l()(), t.rb(129, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin th\u1eafc m\u1eafc xin li\xean h\u1ec7 v\u1edbi Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 c\u1ee7a Vietcombank 24/7 1900 54 54 13."])), (l()(), t.rb(131, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["If any questions, don\u2019t hesitate to contact with Vietcombank Call Center 1900 54 54 13."])), (l()(), t.rb(133, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Tr\xe2n tr\u1ecdng,"])), (l()(), t.rb(135, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Sincerely"]))], null, (function(l, n) {
					var u = n.component;
					l(n, 43, 0, u.data.tranResult.regAccount.accountNumber), l(n, 68, 0, u.data.tranResult.billInfor.vnpayServiceName), l(n, 71, 0, u.data.tranResult.billInfor.vnpayServiceNameEN), l(n, 80, 0, u.data.tranResult.billInfor.providerName), l(n, 83, 0, u.data.tranResult.billInfor.providerNameEN), l(n, 100, 0, u.data.tranResult.billInfor.customerCode), l(n, 109, 0, u.data.tranResult.billInfor.serviceName), l(n, 118, 0, u.data.tranResult.billInfor.customerName), l(n, 127, 0, u.data.tranResult.billInfor.customerAddress)
				}))
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		N1s5: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("WKmO"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		N5Xj: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		NJ5i: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return h
			}));
			var t = u("iInd"),
				e = u("2Vo4"),
				r = u("pLZG"),
				a = u("vkgz"),
				i = u("oyXx"),
				s = u("yeVU"),
				c = u("8Y7J"),
				o = u("s6ns"),
				b = u("TSSN");
			let h = (() => {
				class l {
					constructor(l, n, u) {
						this.dialog = l, this.router = n, this.translate = u, this.modals = [], this.messageSource = new e.a(""), this.message = this.messageSource.asObservable(), this.translateService = u, this.router.events.pipe(Object(r.a)(l => l instanceof t.e), Object(a.a)(() => this.dialog.closeAll())).subscribe(), this.translate.getTranslation(i.a.getLang()).subscribe(l => {
							this.closeButtonText = l.app_close
						}), this.translate.onLangChange.subscribe(l => {
							this.loadTranslation(l.lang)
						})
					}
					loadTranslation(l) {
						this.translateService.use(l).subscribe(l => {
							this.closeButtonText = l.app_close
						})
					}
					info(l, n = {
						disableClose: !0,
						btnConfirm: this.closeButtonText,
						btnCancel: ""
					}) {
						return this.dialog.open(s.a, {
							width: "auto",
							disableClose: n.disableClose,
							data: {
								type: "error",
								message1: l,
								btnConfirm: n.btnConfirm,
								btnCancel: n.btnCancel
							}
						})
					}
					error(l, n, u) {
						const t = i.a.getCurrentUser();
						if (n || (n = {
								disableClose: !0,
								btnConfirm: this.closeButtonText,
								btnCancel: ""
							}), t || "0" === u) {
							const u = this.dialog.open(s.a, {
								width: "auto",
								disableClose: n.disableClose,
								data: {
									type: "error",
									message1: l,
									btnConfirm: n.btnConfirm,
									btnCancel: n.btnCancel
								}
							});
							return u.afterClosed().subscribe(() => {
								$(".sidebar-left-content").css("display", "none"), setTimeout(() => {
									$(".sidebar-left-content").removeAttr("style")
								}, 200)
							}), u
						}
						return null
					}
					success(l, n = {
						disableClose: !0,
						btnConfirm: this.closeButtonText,
						btnCancel: ""
					}) {
						return this.dialog.open(s.a, {
							width: "auto",
							disableClose: n.disableClose,
							data: {
								type: "success",
								message1: l,
								btnConfirm: n.btnConfirm,
								btnCancel: n.btnCancel
							}
						})
					}
					add(l) {
						this.modals.push(l)
					}
					remove(l) {
						this.modals = this.modals.filter(n => n.id !== l)
					}
					open(l) {
						const n = this.modals.find(n => n.id === l);
						n.open(), setTimeout(() => {
							n.close()
						}, 5e3)
					}
					close(l) {
						this.modals.find(n => n.id === l).close()
					}
				}
				return l.ngInjectableDef = c.Rb({
					factory: function() {
						return new l(c.Sb(o.e), c.Sb(t.m), c.Sb(b.k))
					},
					token: l,
					providedIn: "root"
				}), l
			})()
		},
		"O+Vu": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		OCRy: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		P2tI: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		PSoG: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("XgRA"),
				e = u("8Y7J"),
				r = u("iInd"),
				a = u("pW6c"),
				i = u("47AC");
			let s = (() => {
				class l {
					constructor(l, n, u) {
						this.router = l, this.authenticationService = n, this.storeService = u
					}
					canActivate(l, n) {
						console.log("AuthGuard");
						const u = this.authenticationService.currentUserValue,
							e = this.storeService.getFromSession(t.a.StoreKey.JWT_TOKEN);
						return !(!u || !e || "done" !== this.storeService.getFromSession(t.a.StoreKey.LOGIN_STATE)) || (this.router.navigate(["/login"], {
							queryParams: {
								returnUrl: n.url
							}
						}), !1)
					}
				}
				return l.ngInjectableDef = e.Rb({
					factory: function() {
						return new l(e.Sb(r.m), e.Sb(a.a), e.Sb(i.a))
					},
					token: l,
					providedIn: "root"
				}), l
			})()
		},
		PlA3: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("Cjtx"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		QaKD: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("O+Vu"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		R5Qd: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		RJTb: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return m
			}));
			var t = u("mrSG"),
				e = u("iInd"),
				r = u("pLZG"),
				a = u("vkgz"),
				i = u("aaBP"),
				s = u("AytR"),
				c = u("tRjT"),
				o = u("oyXx"),
				b = u("8Y7J"),
				h = u("IheW"),
				d = u("pW6c"),
				g = u("47AC");
			let m = (() => {
				class l {
					constructor(l, n, u, t) {
						this.http = l, this.authenticationService = n, this.router = u, this.storeService = t, this.unknownError = !1, this.unknownErrorStr = "H\u1ec7 th\u1ed1ng t\u1ea1m th\u1eddi gi\xe1n \u0111o\u1ea1n. Qu\xfd kh\xe1ch vui l\xf2ng th\u1eed l\u1ea1i", this.authenticationService = n, this.http = l, this.router = u, this.authenticationService.currentUser.subscribe(l => {
							this.currentUser = l
						}), u.events.pipe(Object(r.a)(l => l instanceof e.e), Object(a.a)(() => {
							this.unknownError = !1
						})).subscribe()
					}
					request(l, n) {
						return new Promise((u, t) => {
							Promise.resolve(!0).then(() => (Object.keys(n).forEach(l => {
								l.search(/amount/gi) >= 0 && (n[l] = o.a.cleanMoney(n[l]))
							}), console.log("request trc khi m\xe3 h\xf3a: ", n), this.authenticationService.encryptAES(JSON.stringify({
								user_name: l,
								client_key: this.authenticationService.pair.public,
								data: n
							}), s.a.publicKey).then(l => l))).then(l => this.http.post(this.authenticationService.apiUrl + "/process-ib", {
								data: l
							}).toPromise().then(l => l).catch(l => (console.log("process-ib error:", l), {
								code: "99",
								des: this.unknownErrorStr
							}))).then(n => {
								if ("00" === n.code)
									if ("0" == n.encrypt) {
										let e = n.data;
										"00" === e.code ? (console.log("apiService-resolved:", e), u(e)) : "EXP" == e.code || "108" == e.code ? (this.authenticationService.logout(l), this.storeService.storeInSession(c.a.StoreKey.LOGIN_STATE, "expired"), this.router.navigate(["/login"]), console.log("apiService-rejected:", e), t(e)) : (console.log("apiService-rejected:", e), t(e))
									} else this.authenticationService.decryptAES(n.data, this.authenticationService.pair.private).then(n => {
										const e = JSON.parse(n);
										"00" === e.code ? (console.log("apiService-resolved:", e), u(e)) : "EXP" === e.code || "108" === e.code ? (this.authenticationService.logout(l), this.storeService.storeInSession(c.a.StoreKey.LOGIN_STATE, "expired"), this.router.navigate(["/login"]), t(e)) : (console.log("apiService-rejected:", e), t(e))
									});
								else {
									"EXP" === n.code && (this.authenticationService.logout(l), this.storeService.storeInSession(c.a.StoreKey.LOGIN_STATE, "expired"), this.router.navigate(["/login"]));
									const u = {
										code: n.code,
										des: n.des
									};
									console.log("apiService-rejected:", u), t(u)
								}
							}).catch(l => {
								"Unknown Error" !== l || this.unknownError || (console.log("connect timeout", l), this.unknownError = !0, t({
									code: "99",
									des: this.unknownErrorStr
								}))
							})
						})
					}
					getAccountPublicByType(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachtaikhoan",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								type: l,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, t).then(u => {
								if ("0" != l) {
									const t = new Map;
									"1" === l && u.DDAccounts.forEach(l => {
										t.set(l.accountNo, l)
									}), "2" === l && u.SAccounts.forEach(l => {
										t.set(l.accountNo, l)
									}), "3" === l && u.FDAccounts.forEach(l => {
										t.set(l.accountNo, l)
									}), "4" === l && u.LNAccounts.forEach(l => {
										t.set(l.accountNo, l)
									}), "5" === l && u.cards.forEach(l => {
										t.set(l.cardNumber, l)
									}), n(t)
								} else {
									const l = ["VND", "USD", "EUR", "GBP", "AUD", "JPY", "CAD", "CHF", "CNY", "DKK", "HKD", "INR", "KRW", "KWD", "MYR", "NOK", "RUB", "SAR", "SEK", "SGD", "THB"],
										t = [];
									u.DDAccounts.forEach(n => {
										-1 === l.indexOf(n.accountCurr) && -1 === t.indexOf(n.accountCurr) && t.push(n.accountCurr)
									}), u.SAccounts.forEach(n => {
										-1 === l.indexOf(n.accountCurr) && -1 === t.indexOf(n.accountCurr) && t.push(n.accountCurr)
									}), u.FDAccounts.forEach(n => {
										-1 === l.indexOf(n.accountCurr) && -1 === t.indexOf(n.accountCurr) && t.push(n.accountCurr)
									}), u.LNAccounts.forEach(n => {
										-1 === l.indexOf(n.accountCurr) && -1 === t.indexOf(n.accountCurr) && t.push(n.accountCurr)
									}), u.lstCcy = l.concat(t.sort()), n(u)
								}
							}).catch(l => {
								u(l)
							})
						})
					}
					getDebitAccounts(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachtaikhoanthanhtoan",
								serviceCode: l,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, t).then(l => {
								const u = new Map;
								l.listDDAccounts.forEach(l => {
									l.availBalance = o.a.formatCurrencyString(l.accountCurr, l.availBalance), u.set(l.accountNo, l)
								}), n(u)
							}).catch(l => {
								u(l)
							})
						})
					}
					getCardsForTransfer() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachthechuyenkhoan",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								const u = new Map;
								n.cardList.forEach(l => {
									l.cardNumbers.length > 0 && l.cardNumbers.forEach(n => {
										let t;
										t = l.accountCurr ? l.accountCurr : "";
										const e = {
											code: n,
											name: n + " - " + t,
											nameEN: n + " - " + t,
											accountNo: l.accountNo,
											accountCurr: l.accountCurr,
											availBalance: l.availBalance,
											branchCode: ""
										};
										u.set(e.code, e)
									})
								}), l(u)
							}).catch(l => {
								n(l)
							})
						})
					}
					getProviders(l) {
						return new Promise((n, u) => {
							Promise.resolve(!0).then(() => {
								const t = {
									processCode: "laydanhsachncc",
									cif: this.currentUser.cif,
									sessionId: this.currentUser.session_id,
									type: l,
									lang: o.a.getLang()
								};
								this.request(this.currentUser.user_name, t).then(l => {
									console.log("result", l);
									const u = new Map;
									l.providers.forEach(l => {
										const n = {
											code: l.provideCode,
											name: l.provideName,
											nameEN: l.provideNameEN,
											icon: l.icon,
											dataimg: l.icon,
											list: new Map,
											VCBServiceCode: l.VCBServiceCode
										};
										l.listServices.forEach(l => {
											const u = {
												code: l.serviceCode,
												name: l.serviceName,
												nameEN: l.serviceNameEN,
												icon: l.icon,
												list: null,
												billType: l.billType
											};
											n.list.set(u.code, u)
										}), u.set(n.code, n)
									}), n(u)
								}).catch(l => {
									u(l)
								})
							})
						})
					}
					getBank(l) {
						return new Promise((n, u) => {
							Promise.resolve(!0).then(() => {
								const t = {
									processCode: "laydanhsachnganhang",
									cif: this.currentUser.cif,
									sessionId: this.currentUser.session_id,
									fastTransfer: l,
									lang: o.a.getLang()
								};
								this.request(this.currentUser.user_name, t).then(l => {
									const u = new Map;
									l.banks.forEach(l => {
										const n = {
											code: l.bankCode,
											name: l.bankName,
											nameEN: l.bankNameEN,
											level: l.level
										};
										u.set(n.code, n)
									}), n(u)
								}).catch(l => {
									u(l)
								})
							})
						})
					}
					getProvince(l) {
						return new Promise((n, u) => {
							Promise.resolve(!0).then(() => {
								const t = {
									processCode: "laydanhsachtinhthanhchinhanh",
									bankCode: l,
									cif: this.currentUser && this.currentUser.cif,
									sessionId: this.currentUser && this.currentUser.session_id,
									lang: o.a.getLang()
								};
								this.request(this.currentUser && this.currentUser.user_name, t).then(u => {
									const t = new Map;
									u.cities.forEach(n => {
										const u = {
											code: n.cityCode,
											name: n.cityName,
											nameEN: n.cityNameEN,
											list: new Map
										};
										"" === l ? n.districts.forEach(l => {
											const n = {
												code: l.districtCode,
												name: l.districtName
											};
											u.list.set(n.code, n)
										}) : n.branchs.forEach(l => {
											const n = {
												code: l.branchCode,
												name: l.branchName
											};
											u.list.set(n.code, n)
										}), t.set(u.code, u)
									}), n(t)
								}).catch(l => {
									u(l)
								})
							})
						})
					}
					getExchangeRate(l, n) {
						return new Promise((u, t) => {
							Promise.resolve(!0).then(() => {
								"" === n && (n = "06800");
								const e = {
									processCode: "laytygia",
									ccy: l,
									branchCode: n,
									lang: o.a.getLang()
								};
								this.request(this.currentUser.user_name, e).then(l => {
									console.log("getExchangeRate:", l.exchangeRate), u(l.exchangeRate)
								}).catch(l => {
									t(l)
								})
							})
						})
					}
					getBeneAccounts(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "laydanhbathuhuong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								serviceCode: l,
								billServiceCode: n,
								billProviderCode: u,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, r).then(l => {
								const n = l.contacts.map(l => (l.selected = !1, l));
								t(n)
							}).catch(l => {
								e(l)
							})
						})
					}
					saveBeneAccounts(l, n, u, t = null, e = null, r = null, a, i, s) {
						return new Promise((c, b) => {
							const h = {
								processCode: "luudanhbathuhuong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								tranId: l,
								serviceCode: n,
								billServiceCode: t,
								billProviderCode: e,
								invoiceNo: r,
								cusName: u,
								type: "1",
								lang: o.a.getLang(),
								isReceive: a,
								username: i,
								subProviderCode: s
							};
							this.request(this.currentUser.user_name, h).then(l => {
								c(l.contacts)
							}).catch(l => {
								b(l)
							})
						})
					}
					saveBeneAccount0557(l, n, u, t, e, r) {
						return new Promise((a, i) => {
							const s = {
								processCode: "luudanhbathuhuong",
								tranId: "",
								serviceCode: "0557",
								cusName: l,
								issueId: n,
								issueName: u,
								issueType: t,
								issuesDate: e,
								issuePlace: r,
								type: "1",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, s).then(l => {
								a(l.contacts)
							}).catch(l => {
								i(l)
							})
						})
					}
					initTopupPayment(l, n, u, t, e, r) {
						return new Promise((a, i) => {
							const s = {
								processCode: "naptiendientu",
								type: l,
								debitAccountNo: n,
								serviceCode: t,
								providerCode: u,
								amount: r,
								invoiceNo: e,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, s).then(l => {
								a(l.transaction)
							}).catch(l => {
								i(l)
							})
						})
					}
					initTransafer247ByAccount(l, n, u, t, e, r, a) {
						return new Promise((i, s) => {
							const c = {
								processCode: "chuyentienliennganhang_taikhoan",
								debitAccountNo: l,
								creditAccountNo: n,
								creditBankCode: u,
								amount: t,
								feeType: e,
								content: r,
								ccyType: a,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, c).then(l => {
								i(l.transaction)
							}).catch(l => {
								s(l)
							})
						})
					}
					initTransafer247ByCard(l, n, u, t, e, r, a) {
						return new Promise((i, s) => {
							const c = {
								processCode: "chuyentienliennganhang_the",
								debitAccountNo: l,
								debitCardNum: n,
								creditCardNum: u,
								amount: t,
								feeType: e,
								content: r,
								ccyType: a,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, c).then(l => {
								i(l.transaction)
							}).catch(l => {
								s(l)
							})
						})
					}
					checkCutOffTime() {
						return new Promise((l, n) => {
							const u = {
								processCode: "checkthoigiancutoff",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					initTransaferNapas(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: l.processCode,
								debitAccountNo: l.debitAccountNo,
								creditAccountNo: l.creditAccountNo,
								creditAccountName: l.creditAccountName,
								creditBankCode: l.creditBankCode,
								creditCityCode: l.creditCityCode,
								creditBranchCode: l.creditBranchCode,
								amount: l.amount,
								feeType: l.feeType,
								content: l.content,
								specificDate: l.specificDate,
								startDate: l.startDate,
								endDate: l.endDate,
								interval: l.interval,
								unit: l.unit,
								tranxNum: l.tranxNum,
								ccyType: l.ccyType,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l.transaction)
							}).catch(l => {
								u(l)
							})
						})
					}
					initTransaferByIssue(l, n, u, t, e, r, a, i, s, c) {
						return new Promise((b, h) => {
							const d = {
								processCode: "chuyentienquagiayto",
								debitAccountNo: l,
								amount: n,
								feeType: u,
								content: t,
								issueName: e,
								issueType: r,
								issueId: a,
								issuesDate: i,
								issuePlace: s,
								ccyType: c,
								sessionId: this.currentUser.session_id,
								cif: this.currentUser.cif,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, d).then(l => {
								b(l.transaction)
							}).catch(l => {
								h(l)
							})
						})
					}
					acceptTransaction(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "xacnhangiaodich",
								tranId: l,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								type: n,
								captcha_id: u,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l)
							}).catch(l => {
								e(l)
							})
						})
					}
					confirmTransaction(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "xacthucgiaodich",
								tranId: l,
								otp: n,
								challenge: u,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l)
							}).catch(l => {
								e(l)
							})
						})
					}
					getReceiverOTP() {
						return this.currentUser.receiver_otp.substring(0, 3) + "****" + this.currentUser.receiver_otp.substring(7)
					}
					getDefaultAccount() {
						return this.currentUser.defaultAccount
					}
					getTransactionReport(l, n, u, t) {
						return new Promise((e, r) => {
							const a = {
								processCode: "laybaocaogiaodich",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								accountNo: l,
								tranType: n,
								fromDate: u,
								toDate: t,
								pageIndex: 0,
								lengthInPage: 999999,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, a).then(l => {
								e(l.listReport)
							}).catch(l => {
								r(l)
							})
						})
					}
					getTransferOrder(l, n, u, t) {
						return new Promise((e, r) => {
							const a = {
								processCode: "laylenhchuyentien",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								tranxType: l,
								startDate: n,
								endDate: u,
								creditChannel: t,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, a).then(l => {
								e(l.commands)
							}).catch(l => {
								r(l)
							})
						})
					}
					getTransferOrderDetail(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "laychitietlenhchuyentien",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								tranxType: l,
								debitAccount: n,
								debitSeq: u,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l.txn)
							}).catch(l => {
								e(l)
							})
						})
					}
					cancelTransferOrder(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "huylenhchuyentien",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								tranxType: l,
								debitAccount: n,
								debitSeq: u,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l.txn)
							}).catch(l => {
								e(l)
							})
						})
					}
					getAccountDetail(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "laychitiettaikhoan",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								accountNo: l,
								accountType: n,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l.accountDetail)
							}).catch(l => {
								t(l)
							})
						})
					}
					getOrganCharity() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhgoituthien",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								const u = new Map;
								n.listAcc.forEach(l => {
									u.set(l.code, l)
								}), l(u)
							}).catch(l => {
								n(l)
							})
						})
					}
					initTranCharity(l, n, u, t, e, r, a) {
						return new Promise((i, s) => {
							const c = {
								processCode: "chuyentientuthien",
								debitAccountNo: l,
								code: n,
								amount: u,
								debitAccountName: t,
								debitAccountAddr: e,
								content: r,
								sessionId: this.currentUser.session_id,
								cif: this.currentUser.cif,
								lang: o.a.getLang(),
								ccyType: a
							};
							this.request(this.currentUser.user_name, c).then(l => {
								i(l.transaction)
							}).catch(l => {
								s(l)
							})
						})
					}
					getAutoDebitService() {
						return new Promise((l, n) => {
							Promise.resolve(!0).then(() => {
								const u = {
									processCode: "laydanhsachdichvu",
									cif: this.currentUser.cif,
									sessionId: this.currentUser.session_id,
									lang: o.a.getLang()
								};
								this.request(this.currentUser.user_name, u).then(n => {
									const u = new Map;
									n.services.forEach(l => {
										const n = {
											code: l.serviceCode,
											name: l.serviceName,
											nameEN: l.serviceNameEN,
											list: new Map
										};
										l.providers.forEach(l => {
											const u = {
												code: l.provideCode,
												name: l.provideName,
												nameEN: l.provideNameEN
											};
											n.list.set(u.code, u)
										}), u.set(n.code, n)
									}), l(u)
								}).catch(l => {
									n(l)
								})
							})
						})
					}
					getAutoDebitList() {
						return new Promise((l, n) => {
							Promise.resolve(!0).then(() => {
								const u = {
									processCode: "laydanhsachtrichnotudong",
									cif: this.currentUser.cif,
									sessionId: this.currentUser.session_id,
									lang: o.a.getLang()
								};
								this.request(this.currentUser.user_name, u).then(n => {
									const u = new Map;
									n.listAutoDebit.forEach(l => {
										const n = {
											code: l.billInfor.customerCode,
											name: l.billInfor.customerCode,
											nameEN: l.billInfor.customerCode,
											regAccount: l.regAccount,
											billInfor: l.billInfor
										};
										u.set(n.code, n)
									}), l(u)
								}).catch(l => {
									n(l)
								})
							})
						})
					}
					initAutoDebit(l, n, u, t) {
						return new Promise((e, r) => {
							const a = {
								processCode: "trichnotudong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								debitAccountNo: l,
								serviceCode: n,
								providerCode: u,
								customerCode: t,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, a).then(l => {
								e(l.transaction)
							}).catch(l => {
								r(l)
							})
						})
					}
					initChangeAutoDebit(l, n, u, t, e, r) {
						return new Promise((a, i) => {
							const s = {
								processCode: "thaydoitrichnotudong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								debitAccountNo: l,
								serviceCode: n,
								providerCode: u,
								customerCode: t,
								customerName: e,
								customerAddr: r,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, s).then(l => {
								a(l.transaction)
							}).catch(l => {
								i(l)
							})
						})
					}
					cancelAutoDebit(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "huytrichnotudong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								serviceCode: l,
								providerCode: n,
								customerCode: u,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l)
							}).catch(l => {
								e(l)
							})
						})
					}
					initTranferToday(l, n, u, t, e, r) {
						return new Promise((a, i) => {
							const s = {
								processCode: "chuyentientronghethong_ngay",
								debitAccountNo: l,
								creditAccountNo: n,
								amount: u,
								feeType: t,
								content: e,
								activeTouch: "0",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								ccyType: r
							};
							this.request(this.currentUser.user_name, s).then(l => {
								a(l)
							}).catch(l => {
								i(l)
							})
						})
					}
					initTranferFuture(l, n, u, t, e, r, a) {
						return new Promise((i, s) => {
							const c = {
								processCode: "chuyentientronghethong_tuonglai",
								debitAccountNo: l,
								creditAccountNo: n,
								amount: u,
								feeType: t,
								content: e,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								specificDate: r,
								lang: o.a.getLang(),
								ccyType: a
							};
							this.request(this.currentUser.user_name, c).then(l => {
								i(l)
							}).catch(l => {
								s(l)
							})
						})
					}
					initTranferRecurrent(l, n, u, t, e, r, a, i, s, c) {
						return new Promise((b, h) => {
							const d = {
								processCode: "chuyentientronghethong_dinhky",
								debitAccountNo: l,
								creditAccountNo: n,
								amount: u,
								feeType: t,
								content: e,
								startDate: r,
								endDate: a,
								interval: i,
								unit: s,
								tranxNum: "",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								ccyType: c
							};
							this.request(this.currentUser.user_name, d).then(l => {
								b(l)
							}).catch(l => {
								h(l)
							})
						})
					}
					getCards(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "laydanhsachthe",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								serviceCode: l,
								cardType: n
							};
							this.request(this.currentUser.user_name, e).then(l => {
								const n = new Map;
								let t = o.a.getRuleLogoCard();
								l.cardList && l.cardList.length > 0 && (l.cardList.forEach(l => {
									let u = l.panShort ? l.panShort : l.cardNumber;
									l.cardName && "UNKNOW" !== l.cardName || t.map(n => {
										u.substring(0, 6).includes(n.prefix) && (l.cardName = n.cardName)
									});
									let e = "assets/images/web/img/cards/";
									switch (l.cardName) {
										case "VISA":
											e += "visa.svg";
											break;
										case "MASTER":
										case "MASTERCARD":
											e += "master.svg";
											break;
										case "AMEX":
											e += "amex.svg";
											break;
										case "JCB":
											e += "jcb.svg";
											break;
										case "Cup":
										case "CUP":
										case "UNION":
										case "UNION PAY":
											e += "unionpay.svg";
											break;
										case "VCB":
											e += "vcb.svg";
											break;
										default:
											e += ""
									}
									n.set(u, {
										code: u,
										name: u,
										nameEN: u,
										accountNo: l.accountNumber,
										icon: l.cardName,
										dataimg: e,
										type: l.type,
										accountNumber: l.primaryAcct
									})
								}), console.log("Data after change rule", n)), u(n)
							}).catch(l => {
								t(l)
							})
						})
					}
					initCardUnlock(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "mokhoathe",
								cardNumber: l,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l.transaction)
							}).catch(l => {
								u(l)
							})
						})
					}
					initCardLock(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "khoathe",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								cardNumber: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l.transaction)
							}).catch(l => {
								u(l)
							})
						})
					}
					initRegisterOnlineCard(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "dangkysudunginternet",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								cardNumber: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l.transaction)
							}).catch(l => {
								u(l)
							})
						})
					}
					initUnRegisterOnlineCard(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "huysudunginternet",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								cardNumber: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l.transaction)
							}).catch(l => {
								u(l)
							})
						})
					}
					registerAutoSavingAccount(l, n, u, t, e) {
						return new Promise((r, a) => {
							const i = {
								processCode: "dangkytietkiemtudong",
								debitAccountNo: l,
								creditAccountNo: n,
								startDate: u,
								endDate: t,
								amount: e,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, i).then(l => {
								r(l)
							}).catch(l => {
								a(l)
							})
						})
					}
					getSavingAccounts(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachtaikhoantietkiem",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								isFillterAutoFDAcc: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getAutoSavingAccounts(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "laytietkiemtudong",
								debitAccountNo: l,
								creditAccountNo: n,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					cancelAutoSavingAccount(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "huytietkiemtudong",
								DebitSeq: l,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getCurrentQuotaLimits(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachhanmuc",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								serviceType: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getAvailableQuotaLimits(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachhanmuckhadung",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								serviceType: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getTaxChapters() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachchuong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					getTaxOrgs() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachcoquanthue",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					getTaxBusinessFields() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachnoidungkinhdoanh",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					getTaxTreasury() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachkhobactonghop",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					getTaxTreasuryDetail(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachkhobacchitiet",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								maKBTH: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getTaxCities() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachdbhctinh",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					getTaxWards(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachdbhcquanhuyen",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								maTinh: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getCurrentUserTaxCode() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laymasothue",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					getTaxDetail(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "laythongtinmasothuecanhan",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								taxCode: l,
								paymentType: n
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					getRegistrationTaxDetail(l, n, u = null, t = null) {
						return new Promise((e, r) => {
							const a = {
								processCode: "laythongtinmasothuetruocba",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								taxCode: l,
								paymentType: n,
								regisFeeType: u,
								issueNo: t
							};
							this.request(this.currentUser.user_name, a).then(l => {
								e(l)
							}).catch(l => {
								r(l)
							})
						})
					}
					initTaxPayment(l, n, u, t, e, r, a, i, s, c, b, h, d, g) {
						return new Promise((h, m) => {
							const p = {
								processCode: "khoitaonopthuecanhan",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								taxCode: l,
								paymentType: n,
								debitAccountNo: u,
								customerName: t,
								customerAddress: e,
								payerTaxCode: r,
								payerName: a,
								payerAddress: i,
								cqtq: b,
								cqtqCode: s,
								payType: c,
								taxBook: d,
								listNVT: g
							};
							this.request(this.currentUser.user_name, p).then(l => {
								h(l)
							}).catch(l => {
								m(l)
							})
						})
					}
					initRegistrationTaxPayment(l, n, u, t, e, r, a, i, s, c, b, h, d, g, m, p) {
						return new Promise((f, v) => {
							const y = {
								processCode: "khoitaogiaodichnopthuetruocba",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								taxCode: l,
								paymentType: n,
								debitAccountNo: u,
								customerName: t,
								customerAddress: e,
								payerTaxCode: r,
								payerName: a,
								payerAddress: i,
								cqtqCode: s,
								payType: c,
								cqtq: d,
								regisFeeType: b,
								issueNo: h,
								payName: g,
								taxBook: m,
								listNVT: p
							};
							this.request(this.currentUser.user_name, y).then(l => {
								f(l)
							}).catch(l => {
								v(l)
							})
						})
					}
					initChangeQuotaLimit(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "khoitaothaydoihanmuc",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								mobileSubSerId: l,
								newSubServiceId: n,
								totalLimit: u
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l)
							}).catch(l => {
								e(l)
							})
						})
					}
					initFinaceService(l, n, u, t, e, r, a) {
						return new Promise((i, s) => {
							const c = {
								processCode: "khoitaodichvutaichinh",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								debitAccountNo: l,
								serviceCode: n,
								providerCode: u,
								invoiceNo: t,
								amount: e,
								cusName: r,
								ccyType: a
							};
							this.request(this.currentUser.user_name, c).then(l => {
								i(l.transaction)
							}).catch(l => {
								s(l)
							})
						})
					}
					getRegisterEmailOtp() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laythongtincardotp",
								user: this.currentUser.user_name,
								type: 1,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					getCancleEmailOtp() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laythongtincardotp",
								user: this.currentUser.user_name,
								type: 2,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					regisEmailOtp(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "khoitaodangkycardotp",
								user: this.currentUser.user_name,
								otpMethod: l,
								email: n,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					cancelEmailOtp(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "huydangkycardotp",
								user: this.currentUser.user_name,
								email: l,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getListCardTinDung(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachthetindung",
								user: this.currentUser.user_name,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								serviceCode: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								console.log(l), n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getDataTinDung(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laythongtinsaokethetindung",
								cardNo: l,
								user: this.currentUser.user_name,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					thanhToanTheTinDung(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "thanhtoanthetindung",
								cardNo: l,
								user: this.currentUser.user_name,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								amount: n,
								debitAccountNo: u
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l)
							}).catch(l => {
								e(l)
							})
						})
					}
					initThaydoisotkchidinh(l, n, u, t) {
						return new Promise((e, r) => {
							const a = {
								processCode: "khoitaothaydoisotkchidinh",
								user: this.currentUser.user_name,
								otpMethod: l,
								newAccountNo: u,
								cardNumber: t,
								accountNo: n,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, a).then(l => {
								e(l)
							}).catch(l => {
								r(l)
							})
						})
					}
					getCardsForDebit(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "laydanhsachthe",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								serviceCode: l,
								cardType: n
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					getListAccount() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachtaikhoan",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								type: 1,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					saveBeneAccount(l = 1, n = "", u, t, e, r, a, i, s, c, b, h, d, g, m, p, f) {
						return new Promise((v, y) => {
							const k = {
								processCode: "luudanhbathuhuong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								serviceCode: u,
								cusName: t,
								contactId: n,
								creditAccountNo: e,
								creditBankLevel: r,
								creditCardNo: a,
								creditAccountName: i,
								creditBankCode: s,
								creditCityCode: c,
								creditBranchCode: b,
								issueId: h,
								issueName: d,
								issueType: g,
								issuesDate: m,
								issuePlace: p,
								type: l,
								lang: o.a.getLang(),
								isReceive: f
							};
							this.request(this.currentUser.user_name, k).then(l => {
								v(l)
							}).catch(l => {
								y(l)
							})
						})
					}
					saveBeneFinaceAccount(l = 1, n = "", u, t, e, r, a, i) {
						return new Promise((s, c) => {
							const b = {
								processCode: "luudanhbathuhuong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								serviceCode: u,
								username: i,
								cusName: t,
								contactId: n,
								billServiceCode: e,
								billProviderCode: r,
								invoiceNo: a,
								type: l,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, b).then(l => {
								s(l)
							}).catch(l => {
								c(l)
							})
						})
					}
					deleteBeneAccount(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "luudanhbathuhuong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								serviceCode: l,
								contactId: n,
								type: "3",
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l.contact)
							}).catch(l => {
								t(l)
							})
						})
					}
					getDanhSachTaiKhoan(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachtaikhoanthanhtoan",
								serviceCode: l,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getListPartnerWallet() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachdoitacvidientu",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					getListWalletRegisted(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachvidientu",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name,
								partnerId: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getListMobileBanking() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachsmsbanking",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					getAccountDefault(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachtaikhoan",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								type: l,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					changeAccountDefault(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "thaydoitaikhoanmacdinh",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								password: n,
								newAccDefault: l,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					initWallet(l, n, u, t, e, r) {
						return new Promise((a, i) => {
							const s = {
								processCode: "khoitaovidientu",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								type: l,
								lang: o.a.getLang(),
								customerCode: n,
								partnerId: u,
								debitAccountNo: t,
								debitAccountNoNew: r,
								otpMethod: e
							};
							this.request(this.currentUser.user_name, s).then(l => {
								a(l)
							}).catch(l => {
								i(l)
							})
						})
					}
					cancelWallet(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "huyvidientu",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								customerCode: l,
								partnerId: n,
								debitAccountNo: u
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l)
							}).catch(l => {
								e(l)
							})
						})
					}
					checkStatusPhoneBanking() {
						return new Promise((l, n) => {
							const u = {
								processCode: "kiemtradangkyphonebanking",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								type: 4,
								lang: o.a.getLang(),
								user: this.currentUser.user_name,
								mobileId: "1",
								clientId: "1"
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					initPhoneBanking(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "khoitaodangkyphonebanking",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								type: 4,
								otpMethod: l,
								debitAccountNo: n,
								lang: o.a.getLang(),
								user: this.currentUser.user_name
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					initCancelSmsBaking(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "khoitaongungsmsbanking",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								type: 4,
								phoneNumber: l,
								accountNo: n,
								lang: o.a.getLang(),
								user: this.currentUser.user_name
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					getListAccountSMSBanking() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachtaikhoanthaydoismsbanking",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					changeAccountSMSBanking(l, n, u, t) {
						return new Promise((e, r) => {
							const a = {
								processCode: "thaydoitaikhoansmsbanking",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name,
								phoneNumber: l,
								oldAccount: n,
								alias: u,
								password: t
							};
							this.request(this.currentUser.user_name, a).then(l => {
								e(l)
							}).catch(l => {
								r(l)
							})
						})
					}
					getConfig(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laygiatriconfig",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name,
								configCodes: [l]
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					changePassword(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "doimatkhau",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name,
								oldPassword: l,
								newPassword: n
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					loadProvider() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachdangkynhacungcap",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name,
								mobileId: "10212",
								clientId: "22378"
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					regisProvider(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "dangkynhacungcap",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name,
								listProv: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getCreditLimit() {
						return new Promise((l, n) => {
							const u = {
								processCode: "layhanmucthe",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					checkSoftOTP() {
						return new Promise((l, n) => {
							const u = {
								processCode: "kiemtratrangthaisoftotpdoclap",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name,
								type: 5,
								mobileId: "1",
								clientId: "1"
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					initChangeCreditLimit(l, n, u, t, e, r) {
						return new Promise((a, i) => {
							const s = {
								processCode: "khoitaothaydoihanmucthe",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name,
								mobileId: "10212",
								clientId: "22378",
								otpMethod: l,
								usageLimitCode: n,
								cardNumber: u,
								retailUsageAmount: t,
								cashUsageAmount: e,
								topUsageAmount: r
							};
							this.request(this.currentUser.user_name, s).then(l => {
								a(l)
							}).catch(l => {
								i(l)
							})
						})
					}
					getProvidersBill(l) {
						return new Promise((n, u) => {
							Promise.resolve(!0).then(() => {
								const t = {
									processCode: "laydanhsachncc",
									cif: this.currentUser.cif,
									sessionId: this.currentUser.session_id,
									type: l,
									lang: o.a.getLang()
								};
								this.request(this.currentUser.user_name, t).then(l => {
									n(l)
								}).catch(l => {
									u(l)
								})
							})
						})
					}
					initTranferBillPayment(l, n, u, t, e, r, a, i) {
						return new Promise((s, c) => {
							const b = {
								processCode: "thanhtoanhoadon",
								type: "2",
								debitAccountNo: l,
								serviceCode: n,
								providerCode: u,
								invoiceNo: t,
								amount: e,
								subProviderCode: r,
								cusName: a,
								addInfo: i,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, b).then(l => {
								s(l)
							}).catch(l => {
								c(l)
							})
						})
					}
					updateisReceive(l, n, u, t = null, e = null, r = null, a, i) {
						return new Promise((s, c) => {
							const b = {
								processCode: "luudanhbathuhuong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								tranId: l,
								serviceCode: n,
								billServiceCode: t,
								billProviderCode: e,
								invoiceNo: r,
								cusName: u,
								type: "2",
								contactId: i,
								lang: o.a.getLang(),
								isReceive: a
							};
							this.request(this.currentUser.user_name, b).then(l => {
								s(l.contacts)
							}).catch(l => {
								c(l)
							})
						})
					}
					checkForeignCif() {
						return new Promise((l, n) => {
							const u = {
								processCode: "checkcifngoaiquoc",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					getSavingTerms() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachlaisuat",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								const u = new Map;
								n.listSavingTerm.forEach(l => {
									l.termName = l.name, l.termNameEN = l.nameEN, l.name = l.name + " (" + l.interestRate + "%/n\u0103m)", l.nameEN = l.nameEN + " (" + l.interestRate + "%/year)", u.set(l.code, l)
								}), l(u)
							}).catch(l => {
								n(l)
							})
						})
					}
					initOpenSaving(l, n, u, t, e) {
						return new Promise((r, a) => {
							const i = {
								processCode: "motaikhoantietkiem",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								debitAccountNo: l,
								savingCode: n,
								amount: u,
								paymentType: t,
								ccyType: e,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, i).then(l => {
								r(l)
							}).catch(l => {
								a(l)
							})
						})
					}
					getSavingAccounts_mapping() {
						return new Promise((l, n) => {
							if (this.currentUser) {
								const u = {
									processCode: "laydanhsachtaikhoantietkiem",
									cif: this.currentUser.cif,
									sessionId: this.currentUser.session_id,
									lang: o.a.getLang()
								};
								this.request(this.currentUser.user_name, u).then(n => {
									const u = new Map;
									n.listFDAccounts.forEach(l => {
										u.set(l.accountNo, l)
									}), l(u)
								}).catch(l => {
									n(l)
								})
							} else n({
								code: "00"
							})
						})
					}
					initCloseSaving(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "tattoantaikhoantietkiem",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								debitAccountNo: l,
								nominateAccountNo: n,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					initAddSaving(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "noptientaikhoantietkiem",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								debitAccountNo: l,
								amount: n,
								FDAccountNo: u,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l)
							}).catch(l => {
								e(l)
							})
						})
					}
					initDrawSaving(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "ruttientaikhoantietkiem",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								debitAccountNo: l,
								amount: n,
								FDAccountNo: u,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l)
							}).catch(l => {
								e(l)
							})
						})
					}
					getRequestTypes(l) {
						return new Promise((n, u) => {
							Promise.resolve(!0).then(() => {
								const t = {
									processCode: "laydanhsachtypetrasoat",
									cif: this.currentUser.cif,
									sessionId: this.currentUser.session_id,
									tranCode: l,
									lang: o.a.getLang()
								};
								this.request(this.currentUser.user_name, t).then(l => {
									const u = new Map;
									l.listRequests.forEach(l => {
										const n = {
											code: l.requestCode,
											name: l.requestName,
											nameEN: l.requestNameEN,
											requestId: l.requestId,
											list: new Map
										};
										l.listReason.forEach(l => {
											const u = {
												code: l.reasonCode,
												name: l.reasonName,
												nameEN: l.reasonNameEN,
												feeAmount: l.feeAmount,
												listField: l.listField
											};
											n.list.set(u.code, u)
										}), u.set(n.code, n)
									}), n(u)
								}).catch(l => {
									u(l)
								})
							})
						})
					}
					getCardForInvest() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachthetrasoat",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								const u = new Map;
								n.cardList.forEach(l => {
									u.set(l.cardNumber, l)
								}), l(u)
							}).catch(l => {
								n(l)
							})
						})
					}
					getTransactionsForInvest(l, n, u, t, e, r) {
						return new Promise((a, i) => {
							const s = {
								processCode: "laydanhsachgiaodichtrasoat",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								accountNo: l,
								accountType: n,
								fromDate: u,
								toDate: t,
								pageIndex: 0,
								lengthInPage: 999999,
								stmtDate: e,
								stmtType: r
							};
							this.request(this.currentUser.user_name, s).then(l => {
								a(l)
							}).catch(l => {
								i(l)
							})
						})
					}
					getTransactionDetailForInvest(l, n, u, t, e, r) {
						return new Promise((a, i) => {
							const s = {
								processCode: "laychitietgiaodichdetrasoat",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								tran: {
									TransactionDate: l,
									Reference: n,
									Amount: u,
									Description: t,
									PCTime: e
								},
								accountNo: r
							};
							this.request(this.currentUser.user_name, s).then(l => {
								a(l)
							}).catch(l => {
								i(l)
							})
						})
					}
					initInvestRequest(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "khoitaotrasoat",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								tsolMappingId: l,
								origTrans: n,
								newTrans: u,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, r).then(l => {
								console.log("initInvestRequest result:", l), t(l)
							}).catch(l => {
								"060" == l.code && (l.transaction.listMethods || (l.transaction.listMethods = [l.transaction.otpMethod]), l.transaction.fees || (l.transaction.fees = [], l.transaction.listMethods.forEach(n => {
									l.transaction.fees.push({
										methodOTP: n,
										methodFee: "0",
										exchangeMethodFee: "0",
										feeAmount: "0",
										totalFee: "0",
										totalFeeAll: "0",
										feeVat: "0",
										exchangeFeeAmount: "0",
										exchangeFeeVat: "0",
										exchangeTotalFee: "0",
										exchangeTotalFeeAll: l.transaction.feeAmount
									})
								}))), console.log("initInvestRequest error:", l), e(l)
							})
						})
					}
					getInvestRequest(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "laydanhsachtrasoatonline",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								fromDate: l,
								toDate: n,
								pageIndex: 0,
								lengthInPage: 999999
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					getInvestRequestDetail(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laythongtintrasoatonline",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								tsolRef: l,
								pageIndex: 0,
								lengthInPage: 999999
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getStatementPeriodDetail(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "laychitietkysaoke",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								cardAccount: l,
								stmtDate: n,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					getStatementPeriod(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachkysaoke",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								cardAccount: l,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, t).then(l => {
								const u = new Map;
								l.statementPeriod.forEach(l => {
									u.set(l, {
										code: l,
										name: l
									})
								}), n(u)
							}).catch(l => {
								u(l)
							})
						})
					}
					getAccountStatement(l, n, u, t, e, r) {
						return new Promise((a, i) => {
							const s = {
								processCode: "laysaoketaikhoan",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								accountNo: l,
								accountType: n,
								fromDate: u,
								toDate: t,
								pageIndex: 0,
								lengthInPage: 999999,
								stmtDate: e,
								stmtType: r,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, s).then(l => {
								a(l)
							}).catch(l => {
								i(l)
							})
						})
					}
					saveStatusLoginWeb(l, n = null) {
						return t.a(this, void 0, void 0, (function*() {
							const u = {
								processCode: "chuyentrangthaidangnhapwed",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								password: n,
								type: l,
								lang: o.a.getLang()
							};
							try {
								return yield this.request(this.currentUser.user_name, u)
							} catch (t) {
								return t
							}
						}))
					}
					saveStatusCrossLogin(l, n = null) {
						return t.a(this, void 0, void 0, (function*() {
							const u = {
								processCode: "chuyentrangthaicrosslogin",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								password: n,
								type: l,
								lang: o.a.getLang()
							};
							try {
								return yield this.request(this.currentUser.user_name, u)
							} catch (t) {
								return t
							}
						}))
					}
					getInfoSettingUser() {
						return t.a(this, void 0, void 0, (function*() {
							const l = {
								processCode: "laythongtincaidatnguoidung",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							try {
								return yield this.request(this.currentUser.user_name, l)
							} catch (n) {
								return n
							}
						}))
					}
					execContact(l, n) {
						return t.a(this, void 0, void 0, (function*() {
							n.type = l.toString();
							const u = Object.assign({
								processCode: "luudanhbathuhuong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id
							}, n, {
								type: l,
								lang: o.a.getLang()
							});
							try {
								return yield this.request(this.currentUser.user_name, u)
							} catch (t) {
								return t
							}
						}))
					}
					getEndows() {
						return t.a(this, void 0, void 0, (function*() {
							const l = {
								processCode: "laydanhsachchuongtrinhuudai",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							try {
								return yield this.request(this.currentUser.user_name, l)
							} catch (n) {
								return n
							}
						}))
					}
					getEndowDetail(l) {
						return t.a(this, void 0, void 0, (function*() {
							const n = {
								processCode: "chitietchuongtrinhuudai",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								dealCode: l,
								lang: o.a.getLang()
							};
							try {
								return yield this.request(this.currentUser.user_name, n)
							} catch (u) {
								return u
							}
						}))
					}
					updateFeatureFavorite(l) {
						return t.a(this, void 0, void 0, (function*() {
							const n = {
								processCode: "updatedanhsachtinhnanyeuthich",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								listFav: l,
								lang: o.a.getLang()
							};
							try {
								return yield this.request(this.currentUser.user_name, n)
							} catch (u) {
								return u
							}
						}))
					}
					getDepositRate() {
						return t.a(this, void 0, void 0, (function*() {
							const l = {
								processCode: "laylaisuattiengui",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							try {
								return yield this.request(this.currentUser.user_name, l)
							} catch (n) {
								return n
							}
						}))
					}
					checkSurveyNPS() {
						return t.a(this, void 0, void 0, (function*() {
							const l = {
								processCode: "kiemtratrangthaikhaosatonline",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							try {
								return yield this.request(this.currentUser.user_name, l)
							} catch (n) {
								return n
							}
						}))
					}
					rejectSurveyNPS() {
						return t.a(this, void 0, void 0, (function*() {
							const l = {
								processCode: "tuchoikhaosatonline",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							try {
								return yield this.request(this.currentUser.user_name, l)
							} catch (n) {
								return n
							}
						}))
					}
					getListPhoneRegSms() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laydanhsachsodienthoaidangkysmsbanking",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					initRegSoftOtp(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "khoitaokichhoatsoftdoclap",
								phoneBanking: l,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								captcha_id: n
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					authenRegSoftOtp(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "xacnhankichhoatsoftdoclap",
								otpId: l,
								otp: n,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								tranId: u,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l)
							}).catch(l => {
								e(l)
							})
						})
					}
					initReActiveSoftOtp(l, n, u) {
						return new Promise((t, e) => {
							const r = {
								processCode: "khoitaokichhoatlaisoftdoclap",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								captcha_id: l,
								tokenDetail: n,
								otpMethod: u
							};
							this.request(this.currentUser.user_name, r).then(l => {
								t(l)
							}).catch(l => {
								e(l)
							})
						})
					}
					authenReActiveSoftOtp(l, n, u, t) {
						return new Promise((e, r) => {
							const a = {
								processCode: "xacnhankichhoatlaisoftdoclap",
								tranId: u,
								otpId: l,
								otp: n,
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								challenge: t
							};
							this.request(this.currentUser.user_name, a).then(l => {
								e(l)
							}).catch(l => {
								r(l)
							})
						})
					}
					CancelSoftOtp(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "huydangkysoftdoclap",
								cif: this.currentUser.cif,
								detail: l,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					BlockSoftOtp(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "khoasoftdoclap",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								tokenDetail: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getStatusSoftOtp() {
						return new Promise((l, n) => {
							const u = {
								processCode: "kiemtratrangthaisoftdoclap",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					getListMobileBankingSmsChuDong(l) {
						return new Promise((n, u) => {
							const t = {
								processCode: "laydanhsachsmsbanking",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name,
								type: l
							};
							this.request(this.currentUser.user_name, t).then(l => {
								n(l)
							}).catch(l => {
								u(l)
							})
						})
					}
					getListAccSmsChuDong(l, n, u, t) {
						return new Promise((e, r) => {
							const a = {
								processCode: "laydanhsachtaikhoanthaydoismsbanking",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								user: this.currentUser.user_name,
								type: l,
								phoneNumber: n,
								accountNo: u,
								serviceLevel: t
							};
							this.request(this.currentUser.user_name, a).then(l => {
								e(l)
							}).catch(l => {
								r(l)
							})
						})
					}
					initActiveSmsChuDong(l, n, u, t, e, r) {
						return new Promise((a, i) => {
							const s = {
								processCode: "khoitaodangkysmschudong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								captcha_id: n,
								phoneNumber: l,
								accountNo: u,
								type: t,
								serviceLevel: e,
								otpMethod: r
							};
							this.request(this.currentUser.user_name, s).then(l => {
								a(l)
							}).catch(l => {
								i(l)
							})
						})
					}
					initChangeSmsChuDong(l, n, u, t, e, r, a) {
						return new Promise((i, s) => {
							const c = {
								processCode: "khoitaothaydoismschudong",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								captcha_id: n,
								phoneNumber: l,
								accountNo: u,
								accountChange: t,
								type: e,
								serviceLevel: r,
								otpMethod: a
							};
							this.request(this.currentUser.user_name, c).then(l => {
								i(l)
							}).catch(l => {
								s(l)
							})
						})
					}
					computeChecksumMd5Hash(l) {
						return new Promise((n, u) => {
							const t = new i.ArrayBuffer,
								e = new FileReader;
							let r = 0;

							function a(n) {
								const u = Math.min(l.size, n + 2097152);
								e.readAsArrayBuffer(l.slice(n, u))
							}
							e.onerror = function() {
								u("MD5 computation failed - error reading the file")
							}, e.onload = function(u) {
								t.append(u.target.result), r += 2097152, r < l.size ? a(r) : n(btoa(t.end(!0)))
							}, a(0)
						})
					}
					getListSeaPortFee() {
						return t.a(this, void 0, void 0, (function*() {
							const l = {
								processCode: "laydanhsachdanhmucphicangbien",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							try {
								return yield this.request(this.currentUser.user_name, l)
							} catch (n) {
								return n
							}
						}))
					}
					getListSeaPortUnit() {
						return t.a(this, void 0, void 0, (function*() {
							const l = {
								processCode: "laydanhsachdonviphicangbien",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							try {
								return yield this.request(this.currentUser.user_name, l)
							} catch (n) {
								return n
							}
						}))
					}
					getListSeaPortTax(l) {
						return t.a(this, void 0, void 0, (function*() {
							const {
								taxCode: n,
								paymentType: u,
								seaFeeType: t,
								seaUnitId: e,
								issueNo: r,
								issueDate: a
							} = l, i = {
								processCode: "laythongtinthuecang",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								taxCode: n,
								paymentType: u,
								seaFeeType: t,
								seaUnitId: e,
								issueNo: r,
								issueDate: a
							};
							try {
								return yield this.request(this.currentUser.user_name, i)
							} catch (s) {
								return s
							}
						}))
					}
					getCompanyInsurance(l, n) {
						return new Promise((u, t) => {
							const e = {
								processCode: "laydanhsachtinhcongtybaohiem",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								type: l,
								cityCode: n
							};
							this.request(this.currentUser.user_name, e).then(l => {
								u(l)
							}).catch(l => {
								t(l)
							})
						})
					}
					getTypeInsurance() {
						return new Promise((l, n) => {
							const u = {
								processCode: "laythongtinloaihinhbaohiem",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang()
							};
							this.request(this.currentUser.user_name, u).then(n => {
								l(n)
							}).catch(l => {
								n(l)
							})
						})
					}
					initTransactionSeaPort(l) {
						return t.a(this, void 0, void 0, (function*() {
							const {
								debitAccountNo: n,
								activeTouch: u,
								activeSoft: t,
								paymentType: e,
								taxCode: r,
								tenDV: a,
								chuongNS: i,
								tieuMuc: s,
								maCQThu: c,
								maKB: b,
								maKBCT: h,
								payerName: d,
								payerAddress: g
							} = l, m = {
								processCode: "khoitaogiaodichthuecangbien",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								debitAccountNo: n,
								activeTouch: u || 0,
								activeSoft: t || 0,
								paymentType: e,
								taxCode: r,
								tenDV: a,
								chuongNS: i,
								tieuMuc: s,
								maCQThu: c,
								maKB: b,
								maKBCT: h,
								payerName: d,
								payerAddress: g
							};
							try {
								return yield this.request(this.currentUser.user_name, m)
							} catch (p) {
								return p
							}
						}))
					}
					requestInfoInsurance(l, n, u, t, e) {
						return new Promise((r, a) => {
							const i = {
								processCode: "truyvanthongtinbaohiem",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								cityCode: l,
								type: n,
								companyCode: u,
								invoice: t,
								month: e
							};
							this.request(this.currentUser.user_name, i).then(l => {
								r(l)
							}).catch(l => {
								a(l)
							})
						})
					}
					initInsurance(l, n, u, t, e) {
						return new Promise((r, a) => {
							const i = {
								processCode: "khotaogiaodichbhxh",
								cif: this.currentUser.cif,
								sessionId: this.currentUser.session_id,
								lang: o.a.getLang(),
								debitAccountNo: l,
								type: n,
								invoice: u,
								amount: t,
								remark: e
							};
							this.request(this.currentUser.user_name, i).then(l => {
								r(l)
							}).catch(l => {
								a(l)
							})
						})
					}
					getBanner(l) {
						return new Promise((n, u) => {
							Promise.resolve(!0).then(() => {
								const t = {
									processCode: "laydanhsachbanner",
									isVip: l,
									lang: o.a.getLang()
								};
								this.request(this.currentUser.user_name, t).then(l => {
									n(l)
								}).catch(l => {
									u(l)
								})
							})
						})
					}
				}
				return l.ngInjectableDef = b.Rb({
					factory: function() {
						return new l(b.Sb(h.c), b.Sb(d.a), b.Sb(e.m), b.Sb(g.a))
					},
					token: l,
					providedIn: "root"
				}), l
			})()
		},
		"RL/f": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("ub6S"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 154, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["BI\xcaN LAI CHUY\u1ec2N TI\u1ec0N QUA T\xc0I KHO\u1ea2N"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Payment Receipt)"])), (l()(), t.rb(12, 0, null, null, 103, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y, gi\u1edd giao d\u1ecbch"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Trans. Date, Time"])), (l()(), t.rb(20, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(29, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(30, null, ["", ""])), (l()(), t.rb(31, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(38, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(39, null, ["", ""])), (l()(), t.rb(40, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Account"])), (l()(), t.rb(47, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(48, null, ["", ""])), (l()(), t.rb(49, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(56, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), (l()(), t.rb(58, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\xe2n h\xe0ng h\u01b0\u1edfng"])), (l()(), t.rb(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Bank Name"])), (l()(), t.rb(65, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(66, null, ["", ""])), (l()(), t.rb(67, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(69, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"])), (l()(), t.rb(71, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(72, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"])), (l()(), t.rb(74, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(75, null, ["", " ", ""])), (l()(), t.rb(76, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(77, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(78, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(80, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(81, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Code"])), (l()(), t.rb(83, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(84, null, [" ", ""])), (l()(), t.rb(85, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(86, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(87, null, ["", ""])), (l()(), t.rb(88, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(89, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(90, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(92, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(93, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Amount"])), (l()(), t.rb(95, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(97, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(99, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(100, null, ["", " VND "])), (l()(), t.rb(101, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(103, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(104, null, [" ", " VND "])), (l()(), t.rb(105, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(106, null, [" ", " VND"])), (l()(), t.rb(107, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(108, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(109, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung chuy\u1ec3n ti\u1ec1n"])), (l()(), t.rb(111, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(112, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Details of Payment"])), (l()(), t.rb(114, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(115, null, ["", ""])), (l()(), t.rb(116, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(117, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(119, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(120, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(122, 0, null, null, 32, "div", [], null, null, null, null, null)), (l()(), t.rb(123, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": Bi\xean lai chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a NHTMCP Ngo\u1ea1i Th\u01b0\u01a1ng Vi\u1ec7t Nam v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba."])), (l()(), t.rb(126, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(127, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(129, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(131, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(133, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(136, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(138, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(141, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(143, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(145, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(147, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(149, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(151, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(153, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], null, (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 30, 0, u.data.tranResult.transaction.tranId), l(n, 39, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 48, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 57, 0, u.data.tranResult.transaction.creditAccountName), l(n, 66, 0, u.data.tranResult.transaction.creditBankName), l(n, 75, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 84, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 87, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 100, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 104, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 106, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 115, 0, u.data.tranResult.transaction.content)
				}))
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		RnhZ: function(l, n, u) {
			var t = {
				"./af": "K/tc",
				"./af.js": "K/tc",
				"./ar": "jnO4",
				"./ar-dz": "o1bE",
				"./ar-dz.js": "o1bE",
				"./ar-kw": "Qj4J",
				"./ar-kw.js": "Qj4J",
				"./ar-ly": "HP3h",
				"./ar-ly.js": "HP3h",
				"./ar-ma": "CoRJ",
				"./ar-ma.js": "CoRJ",
				"./ar-sa": "gjCT",
				"./ar-sa.js": "gjCT",
				"./ar-tn": "bYM6",
				"./ar-tn.js": "bYM6",
				"./ar.js": "jnO4",
				"./az": "SFxW",
				"./az.js": "SFxW",
				"./be": "H8ED",
				"./be.js": "H8ED",
				"./bg": "hKrs",
				"./bg.js": "hKrs",
				"./bm": "p/rL",
				"./bm.js": "p/rL",
				"./bn": "kEOa",
				"./bn.js": "kEOa",
				"./bo": "0mo+",
				"./bo.js": "0mo+",
				"./br": "aIdf",
				"./br.js": "aIdf",
				"./bs": "JVSJ",
				"./bs.js": "JVSJ",
				"./ca": "1xZ4",
				"./ca.js": "1xZ4",
				"./cs": "PA2r",
				"./cs.js": "PA2r",
				"./cv": "A+xa",
				"./cv.js": "A+xa",
				"./cy": "l5ep",
				"./cy.js": "l5ep",
				"./da": "DxQv",
				"./da.js": "DxQv",
				"./de": "tGlX",
				"./de-at": "s+uk",
				"./de-at.js": "s+uk",
				"./de-ch": "u3GI",
				"./de-ch.js": "u3GI",
				"./de.js": "tGlX",
				"./dv": "WYrj",
				"./dv.js": "WYrj",
				"./el": "jUeY",
				"./el.js": "jUeY",
				"./en-au": "Dmvi",
				"./en-au.js": "Dmvi",
				"./en-ca": "OIYi",
				"./en-ca.js": "OIYi",
				"./en-gb": "Oaa7",
				"./en-gb.js": "Oaa7",
				"./en-ie": "4dOw",
				"./en-ie.js": "4dOw",
				"./en-il": "czMo",
				"./en-il.js": "czMo",
				"./en-in": "7C5Q",
				"./en-in.js": "7C5Q",
				"./en-nz": "b1Dy",
				"./en-nz.js": "b1Dy",
				"./en-sg": "t+mt",
				"./en-sg.js": "t+mt",
				"./eo": "Zduo",
				"./eo.js": "Zduo",
				"./es": "iYuL",
				"./es-do": "CjzT",
				"./es-do.js": "CjzT",
				"./es-us": "Vclq",
				"./es-us.js": "Vclq",
				"./es.js": "iYuL",
				"./et": "7BjC",
				"./et.js": "7BjC",
				"./eu": "D/JM",
				"./eu.js": "D/JM",
				"./fa": "jfSC",
				"./fa.js": "jfSC",
				"./fi": "gekB",
				"./fi.js": "gekB",
				"./fil": "1ppg",
				"./fil.js": "1ppg",
				"./fo": "ByF4",
				"./fo.js": "ByF4",
				"./fr": "nyYc",
				"./fr-ca": "2fjn",
				"./fr-ca.js": "2fjn",
				"./fr-ch": "Dkky",
				"./fr-ch.js": "Dkky",
				"./fr.js": "nyYc",
				"./fy": "cRix",
				"./fy.js": "cRix",
				"./ga": "USCx",
				"./ga.js": "USCx",
				"./gd": "9rRi",
				"./gd.js": "9rRi",
				"./gl": "iEDd",
				"./gl.js": "iEDd",
				"./gom-deva": "qvJo",
				"./gom-deva.js": "qvJo",
				"./gom-latn": "DKr+",
				"./gom-latn.js": "DKr+",
				"./gu": "4MV3",
				"./gu.js": "4MV3",
				"./he": "x6pH",
				"./he.js": "x6pH",
				"./hi": "3E1r",
				"./hi.js": "3E1r",
				"./hr": "S6ln",
				"./hr.js": "S6ln",
				"./hu": "WxRl",
				"./hu.js": "WxRl",
				"./hy-am": "1rYy",
				"./hy-am.js": "1rYy",
				"./id": "UDhR",
				"./id.js": "UDhR",
				"./is": "BVg3",
				"./is.js": "BVg3",
				"./it": "bpih",
				"./it-ch": "bxKX",
				"./it-ch.js": "bxKX",
				"./it.js": "bpih",
				"./ja": "B55N",
				"./ja.js": "B55N",
				"./jv": "tUCv",
				"./jv.js": "tUCv",
				"./ka": "IBtZ",
				"./ka.js": "IBtZ",
				"./kk": "bXm7",
				"./kk.js": "bXm7",
				"./km": "6B0Y",
				"./km.js": "6B0Y",
				"./kn": "PpIw",
				"./kn.js": "PpIw",
				"./ko": "Ivi+",
				"./ko.js": "Ivi+",
				"./ku": "JCF/",
				"./ku.js": "JCF/",
				"./ky": "lgnt",
				"./ky.js": "lgnt",
				"./lb": "RAwQ",
				"./lb.js": "RAwQ",
				"./lo": "sp3z",
				"./lo.js": "sp3z",
				"./lt": "JvlW",
				"./lt.js": "JvlW",
				"./lv": "uXwI",
				"./lv.js": "uXwI",
				"./me": "KTz0",
				"./me.js": "KTz0",
				"./mi": "aIsn",
				"./mi.js": "aIsn",
				"./mk": "aQkU",
				"./mk.js": "aQkU",
				"./ml": "AvvY",
				"./ml.js": "AvvY",
				"./mn": "lYtQ",
				"./mn.js": "lYtQ",
				"./mr": "Ob0Z",
				"./mr.js": "Ob0Z",
				"./ms": "6+QB",
				"./ms-my": "ZAMP",
				"./ms-my.js": "ZAMP",
				"./ms.js": "6+QB",
				"./mt": "G0Uy",
				"./mt.js": "G0Uy",
				"./my": "honF",
				"./my.js": "honF",
				"./nb": "bOMt",
				"./nb.js": "bOMt",
				"./ne": "OjkT",
				"./ne.js": "OjkT",
				"./nl": "+s0g",
				"./nl-be": "2ykv",
				"./nl-be.js": "2ykv",
				"./nl.js": "+s0g",
				"./nn": "uEye",
				"./nn.js": "uEye",
				"./oc-lnc": "Fnuy",
				"./oc-lnc.js": "Fnuy",
				"./pa-in": "8/+R",
				"./pa-in.js": "8/+R",
				"./pl": "jVdC",
				"./pl.js": "jVdC",
				"./pt": "8mBD",
				"./pt-br": "0tRk",
				"./pt-br.js": "0tRk",
				"./pt.js": "8mBD",
				"./ro": "lyxo",
				"./ro.js": "lyxo",
				"./ru": "lXzo",
				"./ru.js": "lXzo",
				"./sd": "Z4QM",
				"./sd.js": "Z4QM",
				"./se": "//9w",
				"./se.js": "//9w",
				"./si": "7aV9",
				"./si.js": "7aV9",
				"./sk": "e+ae",
				"./sk.js": "e+ae",
				"./sl": "gVVK",
				"./sl.js": "gVVK",
				"./sq": "yPMs",
				"./sq.js": "yPMs",
				"./sr": "zx6S",
				"./sr-cyrl": "E+lV",
				"./sr-cyrl.js": "E+lV",
				"./sr.js": "zx6S",
				"./ss": "Ur1D",
				"./ss.js": "Ur1D",
				"./sv": "X709",
				"./sv.js": "X709",
				"./sw": "dNwA",
				"./sw.js": "dNwA",
				"./ta": "PeUW",
				"./ta.js": "PeUW",
				"./te": "XLvN",
				"./te.js": "XLvN",
				"./tet": "V2x9",
				"./tet.js": "V2x9",
				"./tg": "Oxv6",
				"./tg.js": "Oxv6",
				"./th": "EOgW",
				"./th.js": "EOgW",
				"./tl-ph": "Dzi0",
				"./tl-ph.js": "Dzi0",
				"./tlh": "z3Vd",
				"./tlh.js": "z3Vd",
				"./tr": "DoHr",
				"./tr.js": "DoHr",
				"./tzl": "z1FC",
				"./tzl.js": "z1FC",
				"./tzm": "wQk9",
				"./tzm-latn": "tT3J",
				"./tzm-latn.js": "tT3J",
				"./tzm.js": "wQk9",
				"./ug-cn": "YRex",
				"./ug-cn.js": "YRex",
				"./uk": "raLr",
				"./uk.js": "raLr",
				"./ur": "UpQW",
				"./ur.js": "UpQW",
				"./uz": "Loxo",
				"./uz-latn": "AQ68",
				"./uz-latn.js": "AQ68",
				"./uz.js": "Loxo",
				"./vi": "KSF8",
				"./vi.js": "KSF8",
				"./x-pseudo": "/X5v",
				"./x-pseudo.js": "/X5v",
				"./yo": "fzPg",
				"./yo.js": "fzPg",
				"./zh-cn": "XDpg",
				"./zh-cn.js": "XDpg",
				"./zh-hk": "SatO",
				"./zh-hk.js": "SatO",
				"./zh-mo": "OmwH",
				"./zh-mo.js": "OmwH",
				"./zh-tw": "kOpN",
				"./zh-tw.js": "kOpN"
			};

			function e(l) {
				var n = r(l);
				return u(n)
			}

			function r(l) {
				if (!u.o(t, l)) {
					var n = new Error("Cannot find module '" + l + "'");
					throw n.code = "MODULE_NOT_FOUND", n
				}
				return t[l]
			}
			e.keys = function() {
				return Object.keys(t)
			}, e.resolve = r, l.exports = e, e.id = "RnhZ"
		},
		"S+cY": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("aR/e"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		"T/8z": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("VmWZ"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 136, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 12, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 3, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG B\xc1O D\u1ecaCH V\u1ee4 \u1ee6Y QUY\u1ec0N TR\xcdCH N\u1ee2 T\u1ef0 \u0110\u1ed8NG"])), (l()(), t.rb(10, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" VCB-AUTO DEBIT"])), (l()(), t.rb(12, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(VCB-AUTO DEBIT Notice)"])), (l()(), t.rb(14, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["K\xednh g\u1eedi Qu\xfd kh\xe1ch h\xe0ng,"])), (l()(), t.rb(16, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Dear valued Customer,"])), (l()(), t.rb(18, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\u1ea3m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank. "])), (l()(), t.rb(20, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for choosing Vietcombank\u2019s services."])), (l()(), t.rb(22, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Tr\xe2n tr\u1ecdng th\xf4ng b\xe1o Qu\xfd kh\xe1ch \u0111\xe3 \u0111\u0103ng k\xfd thay \u0111\u1ed5i s\u1ed1 t\xe0i kho\u1ea3n s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 \u1ee6y quy\u1ec1n tr\xedch n\u1ee3 t\u1ef1 \u0111\u1ed9ng VCB-Auto Debit th\xe0nh c\xf4ng v\u1edbi th\xf4ng tin sau \u0111\xe2y:"])), (l()(), t.rb(24, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Please be advised that you\u2019ve sucessfully changed the account using VCB-Auto Debit Service as follows: "])), (l()(), t.rb(26, 0, null, null, 101, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(28, 0, null, null, 6, "td", [
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(29, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN T\xc0I KHO\u1ea2N NGU\u1ed2N"])), (l()(), t.rb(31, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["DEBIT ACCOUNT"])), (l()(), t.rb(35, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 5, "td", [
					["width", "300"]
				], null, null, null, null, null)), (l()(), t.rb(37, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n thay \u0111\u1ed5i"])), (l()(), t.rb(39, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(40, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["New Debit account"])), (l()(), t.rb(42, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(43, null, ["", ""])), (l()(), t.rb(44, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 6, "td", [
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(46, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN \u0110\u0102NG K\xdd"])), (l()(), t.rb(48, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(49, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["DETAILS"])), (l()(), t.rb(52, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(53, 0, null, null, 6, "td", [
					["class", "fontsize1"],
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN NH\xc0 CUNG C\u1ea4P D\u1ecaCH V\u1ee4"])), (l()(), t.rb(56, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(57, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(58, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["SERVICE PROVIDER INFORMATION"])), (l()(), t.rb(60, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), t.rb(61, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(62, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i d\u1ecbch v\u1ee5"])), (l()(), t.rb(64, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(65, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Service"])), (l()(), t.rb(67, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), t.Lb(68, null, [" ", ""])), (l()(), t.rb(69, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(70, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(71, null, ["", ""])), (l()(), t.rb(72, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), t.rb(73, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(74, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean nh\xe0 cung c\u1ea5p d\u1ecbch v\u1ee5"])), (l()(), t.rb(76, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(77, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Service provider "])), (l()(), t.rb(79, 0, null, null, 4, "td", [], null, null, null, null, null)), (l()(), t.Lb(80, null, [" ", ""])), (l()(), t.rb(81, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(82, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(83, null, ["", ""])), (l()(), t.rb(84, 0, null, null, 7, "tr", [], null, null, null, null, null)), (l()(), t.rb(85, 0, null, null, 6, "td", [
					["class", "fontsize1"],
					["colspan", "2"]
				], null, null, null, null, null)), (l()(), t.rb(86, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["TH\xd4NG TIN KH\xc1CH H\xc0NG"])), (l()(), t.rb(88, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(89, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(), t.rb(90, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["CUSTOMER INFORMATION"])), (l()(), t.rb(92, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(93, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(94, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\xe3 kh\xe1ch h\xe0ng"])), (l()(), t.rb(96, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(97, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Customer code"])), (l()(), t.rb(99, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(100, null, ["", ""])), (l()(), t.rb(101, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(102, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(103, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean \u0111\u01a1n v\u1ecb \u0111i\u1ec7n l\u1ef1c/T\xean \u0111\u01a1n v\u1ecb n\u01b0\u1edbc"])), (l()(), t.rb(105, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(106, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Unit "])), (l()(), t.rb(108, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(109, null, ["", ""])), (l()(), t.rb(110, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(111, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(112, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ch\u1ee7 h\u1ee3p \u0111\u1ed3ng"])), (l()(), t.rb(114, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(115, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Contract holder "])), (l()(), t.rb(117, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(118, null, ["", ""])), (l()(), t.rb(119, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(120, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(121, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ecba ch\u1ec9 "])), (l()(), t.rb(123, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(124, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Address "])), (l()(), t.rb(126, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(127, null, ["", ""])), (l()(), t.rb(128, 0, null, null, 8, "div", [], null, null, null, null, null)), (l()(), t.rb(129, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin th\u1eafc m\u1eafc xin li\xean h\u1ec7 v\u1edbi Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 c\u1ee7a Vietcombank 24/7 1900 54 54 13."])), (l()(), t.rb(131, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["If any questions, don\u2019t hesitate to contact with Vietcombank Call Center 1900 54 54 13."])), (l()(), t.rb(133, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Tr\xe2n tr\u1ecdng,"])), (l()(), t.rb(135, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Sincerely"]))], null, (function(l, n) {
					var u = n.component;
					l(n, 43, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 68, 0, u.data.tranResult.transaction.serviceName), l(n, 71, 0, u.data.tranResult.transaction.serviceNameEN), l(n, 80, 0, u.data.tranResult.transaction.providerName), l(n, 83, 0, u.data.tranResult.transaction.providerNameEN), l(n, 100, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 109, 0, u.data.tranResult.transaction.supplierName), l(n, 118, 0, u.data.tranResult.transaction.creditAccountName), l(n, 127, 0, u.data.tranResult.transaction.creditAccountAddr)
				}))
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		TGGJ: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		TwbJ: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("N5Xj"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		UIky: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {}
		},
		VRT4: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return g
			}));
			var t = u("8Y7J"),
				e = u("SVse"),
				r = u("kKWH"),
				a = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"]))], null, null)
			}

			function s(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n tr\xedch n\u1ee3"]))], null, null)
			}

			function c(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"]))], null, null)
			}

			function o(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Amount"]))], null, null)
			}

			function b(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ghi c\xf3"])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Amount"])), (l()(), t.rb(7, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(8, null, ["", " VND"]))], null, (function(l, n) {
					l(n, 8, 0, n.component.data.tranResult.transaction.exchangeAmount)
				}))
			}

			function h(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 171, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 12, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 3, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["BI\xcaN LAI CHUY\u1ec2N TI\u1ec0N CHO NG\u01af\u1edcI H\u01af\u1edeNG NH\u1eacN TI\u1ec0N M\u1eb6T"])), (l()(), t.rb(10, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" T\u1ea0I QU\u1ea6Y VIETCOMBANK"])), (l()(), t.rb(12, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Payment Receipt)"])), (l()(), t.rb(14, 0, null, null, 118, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(16, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(17, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y, gi\u1edd giao d\u1ecbch"])), (l()(), t.rb(19, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(20, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Trans. Date, Time"])), (l()(), t.rb(22, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(23, null, ["", ""])), (l()(), t.rb(24, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(25, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(26, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(28, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(29, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(31, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(32, null, ["", ""])), (l()(), t.rb(33, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(34, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(35, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(37, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(38, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(40, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(41, null, ["", ""])), (l()(), t.rb(42, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(43, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(44, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(46, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(47, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(49, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(50, null, ["", ""])), (l()(), t.rb(51, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(52, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(53, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 gi\u1ea5y t\u1edd t\xf9y th\xe2n"])), (l()(), t.rb(55, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(56, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["ID number"])), (l()(), t.rb(58, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(59, null, ["", ""])), (l()(), t.rb(60, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(61, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(62, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y c\u1ea5p"])), (l()(), t.rb(64, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(65, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Issue Date"])), (l()(), t.rb(67, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(68, null, ["", ""])), (l()(), t.rb(69, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(70, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(71, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u01a1i c\u1ea5p"])), (l()(), t.rb(73, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(74, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Issue place"])), (l()(), t.rb(76, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(77, null, ["", "", "", ""])), (l()(), t.rb(78, 0, null, null, 12, "tr", [], null, null, null, null, null)), (l()(), t.rb(79, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, i)), t.qb(81, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, s)), t.qb(83, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(84, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, c)), t.qb(86, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, o)), t.qb(88, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(89, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(90, null, ["", " ", ""])), (l()(), t.gb(16777216, null, null, 1, null, b)), t.qb(92, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(93, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(94, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(95, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(97, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(98, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Code "])), (l()(), t.rb(100, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(101, null, [" ", ""])), (l()(), t.rb(102, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(103, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(104, null, ["", ""])), (l()(), t.rb(105, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(106, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(107, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(109, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(110, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Fee Amount"])), (l()(), t.rb(112, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(114, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(116, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(117, null, ["", " VND "])), (l()(), t.rb(118, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(120, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(121, null, [" ", " VND "])), (l()(), t.rb(122, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(123, null, [" ", " VND"])), (l()(), t.rb(124, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(125, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(126, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung chuy\u1ec3n ti\u1ec1n"])), (l()(), t.rb(128, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(129, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Details of Payment "])), (l()(), t.rb(131, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(132, null, ["", ""])), (l()(), t.rb(133, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(134, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(136, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(137, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(139, 0, null, null, 32, "div", [], null, null, null, null, null)), (l()(), t.rb(140, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": Bi\xean lai chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a NHTMCP Ngo\u1ea1i Th\u01b0\u01a1ng Vi\u1ec7t Nam v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba."])), (l()(), t.rb(143, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(144, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(146, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(148, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(150, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(153, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(155, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(158, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(160, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(162, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(164, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(166, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(168, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(170, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], (function(l, n) {
					var u = n.component;
					l(n, 81, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 83, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 86, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 88, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 92, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy)
				}), (function(l, n) {
					var u = n.component;
					l(n, 23, 0, u.data.tranResult.transaction.createTime), l(n, 32, 0, u.data.tranResult.transaction.tranId), l(n, 41, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 50, 0, u.data.tranResult.transaction.creditAccountName), l(n, 59, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 68, 0, u.data.tranResult.transaction.issuesDate), l(n, 77, 0, u.data.province.name, u.data.province.nameEN ? "/" : "", u.data.province.nameEN), l(n, 90, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 101, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 104, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 117, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 121, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 123, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 132, 0, u.data.tranResult.transaction.content)
				}))
			}

			function d(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, h, a)), t.qb(1, 114688, null, 0, r.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var g = t.nb("ng-component", r.a, d, {
				data: "data"
			}, {}, [])
		},
		VXAP: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("mrSG"),
				e = u("XgRA"),
				r = u("AytR"),
				a = u("lelo"),
				i = u("oyXx");
			class s {
				constructor(l, n) {
					this.storeService = l, this.translate = n, this.env = r.a, this.isSubmitted = !1, this.translateService = n, this.lang = i.a.getLang(), n.addLangs(["vi", "en"]), n.setDefaultLang("vi"), this.loadTranslation(this.lang), n.getTranslation(this.lang).subscribe(l => {
						this.translator = l
					}), this.currentUser = i.a.getCurrentUser(), l.changes.subscribe(l => {
						try {
							$("[data-tooltip]").tooltip("hide");
							const l = $("form");
							l && "function" == typeof l.parsley() && "function" == typeof l.parsley().reset && l.parsley().reset()
						} catch (n) {}
						l.key === e.a.StoreKey.LANGUAGE && this.loadTranslation(l.value), l.key === e.a.StoreKey.USER_INFO && (this.currentUser = i.a.getCurrentUser())
					}), $(document).ready(() => {
						$("form[data-parsley-validate]").attr("data-parsley-focus", "none")
					}), this.callJS()
				}
				ngOnInit() {}
				callJS() {
					$(document).ready(() => {
						$(".modal").on("hidden.bs.modal", l => {
							$(".modal").hasClass("show") || ($(window).width() < 769 ? (BNS.off(), $("body").css("overflow", "")) : $("body").css("overflow", ""), $("body").css("padding-right", ""), $("header").css("padding-right", ""))
						})
					})
				}
				changeLang(l) {
					this.storeService.store(e.a.StoreKey.LANGUAGE, l)
				}
				loadTranslation(l) {
					switch (this.lang = l, l) {
						case "vi":
							this.language = a.a.vi;
							break;
						case "en":
							this.language = a.a.en
					}
					this.translateService.use(l).subscribe(l => {
						this.translator = l
					})
				}
				loadLanguages() {
					return t.a(this, void 0, void 0, (function*() {
						this.localize = yield this.translate.getTranslation(this.lang).toPromise(), this.translator = yield this.translate.getTranslation(this.lang).toPromise()
					}))
				}
				translateAmountText(l, n = "VND") {
					return VCB_MONEY.setLang(this.lang), VCB_MONEY.setCurrency(n), VCB_MONEY.moneyToWords(l.toString())
				}
				ngOnDestroy() {
					try {
						$(".select-2").select2("close"), $(".modal") && ($(".modal").modal("hide"), $(".modal").modal("dispose"), $("body").removeClass("modal-open"))
					} catch (l) {
						console.log("BaseComponent -> ngOnDestroy -> error", l)
					}
				}
			}
		},
		VmWZ: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		WDer: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		WKmO: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		X6sQ: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		XgRA: function(l, n, u) {
			"use strict";
			var t = u("lelo"),
				e = u("tRjT");
			let r = (() => {
				class l {}
				return l.widgets = [{
					code: "T",
					name: "wic_transfer_money",
					desc: "wic_transfer_money_desc",
					slug: "chuyentien",
					list: [{
						code: "T1",
						name: "ic_chuyen_tien_vcb",
						icon: "assets/images/web/icons/white/ic_chuyen-tien.svg",
						link: "/chuyentien/chuyentientronghethong/:checksum",
						isChecked: !1
					}, {
						code: "T2",
						name: "ic_chuyen_tien_nhanh_247",
						icon: "assets/images/web/icons/white/ic_chuyen-tien-nhanh.svg",
						link: "/chuyentien/chuyentienquataikhoan/:checksum",
						isChecked: !1
					}, {
						code: "T4",
						name: "ic_chuyen_tien_ngoai",
						icon: "assets/images/web/icons/white/ic_chuyen-tien-ngoai.svg",
						link: "/chuyentien/chuyentienquanhnn/:checksum",
						isChecked: !1
					}, {
						code: "T5",
						name: "ic_chuyen_tien_cmt",
						icon: "assets/images/web/icons/white/ic_chuyen-tien-cmt.svg",
						link: "/chuyentien/chuyentienbangcmt/:checksum",
						isChecked: !1
					}, {
						code: "T6",
						name: "ic_chuyen_tien_tu_thien",
						icon: "assets/images/web/icons/white/ic_chuyen-tien-tu-thien.svg",
						link: "/chuyentien/chuyentientuthien/:checksum",
						isChecked: !1
					}, {
						code: "T7",
						name: "ic_trang_thai_lenh_chuyen_tien",
						icon: "assets/images/web/icons/white/ic_trang-thai-lenh-chuyen-tien.svg",
						link: "/chuyentien/trangthailenhchuyentien/:checksum/1",
						isChecked: !1
					}]
				}, {
					code: "B",
					name: "wic_bill_payment",
					desc: "wic_bill_payment_desc",
					slug: "tthoadon",
					isHaveMore: !0,
					list: []
				}, {
					code: "R",
					name: "wic_topup_money",
					desc: "wic_topup_money_desc",
					slug: "thanhtoan",
					list: [{
						code: "R1",
						name: "ic_phone",
						icon: "assets/images/web/icons/white/ic_phone.svg",
						link: "/nap-tien/nap-tien-dien-thoai/:checksum",
						isChecked: !1
					}, {
						code: "R3",
						name: "ic_nap_tien_dien_tu",
						icon: "assets/images/web/icons/white/ic_nap-tien-dien-tu.svg",
						link: "/nap-tien/nap-tien-dien-tu/:checksum",
						isChecked: !1
					}, {
						code: "R4",
						name: "ic_nap_tien_dai_ly",
						icon: "assets/images/web/icons/white/ic_nap-tien-dien-tu.svg",
						link: "/nap-tien/nap-tien-dai-ly/:checksum",
						isChecked: !1
					}, {
						code: "R6",
						name: "ic_chungkhoan",
						icon: "assets/images/web/icons/white/ic_chungkhoan.svg",
						link: "/nap-tien/dich-vu-tai-chinh/:checksum",
						isChecked: !1
					}]
				}, {
					code: "S",
					name: "wic_save_money",
					desc: "wic_save_money_desc",
					slug: "tietkiem",
					list: [{
						code: "S1",
						name: "ic_mo_tiet_kiem",
						icon: "assets/images/web/icons/white/ic_mo-tiet-kiem.svg",
						link: "/tienguitructuyen/motaikhoantietkiem/:checksum",
						isChecked: !1
					}, {
						code: "S2",
						name: "ic_nop_tiet_kiem",
						icon: "assets/images/web/icons/white/ic_nop-tiet-kiem.svg",
						link: "/tienguitructuyen/noptienvaotaikhoan/:checksum",
						isChecked: !1
					}, {
						code: "S3",
						name: "ic_rut_tiet_kiem",
						icon: "assets/images/web/icons/white/ic_rut-tiet-kiem.svg",
						link: "/tienguitructuyen/ruttientutaikhoan/:checksum",
						isChecked: !1
					}, {
						code: "S4",
						name: "ic_tat_toan_tiet_kiem",
						icon: "assets/images/web/icons/white/ic_tat-toan-tiet-kiem.svg",
						link: "/tienguitructuyen/tattoantaikhoantietkiem/:checksum",
						isChecked: !1
					}, {
						code: "S5",
						name: "ic_tietkiem_tu_dong",
						icon: "assets/images/web/icons/white/ic_tietkiem-tu-dong.svg",
						link: "/tienguitructuyen/dangkytietkiemtudong/:checksum",
						isChecked: !1
					}, {
						code: "S6",
						name: "ic_huy_tiet_kiem_tu_dong",
						icon: "assets/images/web/icons/white/ic_huy-tiet-kiem-tu-dong.svg",
						link: "/tienguitructuyen/huytietkiemtudong/:checksum",
						isChecked: !1
					}]
				}, {
					code: "BG",
					name: "wic_state_buget",
					desc: "wic_state_buget_desc",
					slug: "ngansach",
					list: [{
						code: "B88",
						name: "ic_bh_xahoi",
						icon: "assets/images/web/icons/white/ic_bh-xahoi.svg",
						link: "/ngansach/baohiemxahoi/:checksum",
						isChecked: !1
					}, {
						code: "BG1",
						name: "ic_nop_thue_noi_dia",
						icon: "assets/images/web/icons/white/ic_tax.svg",
						link: "/ngansach/nop-thue/:checksum/noidia",
						isChecked: !1
					}, {
						code: "BG2",
						name: "ic_nop_thue_truoc_ba",
						icon: "assets/images/web/icons/white/ic_tax.svg",
						link: "/ngansach/nop-thue/:checksum/truocba",
						isChecked: !1
					}, {
						code: "BG3",
						name: "ic_phi_cang_bien",
						icon: "assets/images/web/icons/white/ic_anchor.svg",
						link: "/ngansach/nop-phi/:checksum/cangbien",
						isChecked: !1
					}]
				}, {
					code: "C",
					name: "wic_credit",
					desc: "wic_credit_desc",
					slug: "tindung",
					isHaveMore: !0,
					list: [{
						code: "C1",
						name: "ic_card_tin_dung",
						icon: "assets/images/web/icons/white/ic_card-tin-dung.svg",
						link: "/tindung/thanhtoanthetindung/:checksum",
						isChecked: !1
					}, {
						code: "C2",
						name: "ic_card_unlock",
						icon: "assets/images/web/icons/white/ic_card-unlock.svg",
						link: "/tindung/dichvuthe/mokhoathe",
						isChecked: !1
					}, {
						code: "C3",
						name: "ic_card_lock",
						icon: "assets/images/web/icons/white/ic_card-lock.svg",
						link: "/tindung/dichvuthe/khoathe",
						isChecked: !1
					}, {
						code: "C4",
						name: "ic_dang_ky_thanh_toan_internet",
						icon: "assets/images/web/icons/white/ic_card-lock.svg",
						link: "/tindung/dichvuthe/dkttinternet",
						isChecked: !1,
						inMore: !0
					}, {
						code: "C5",
						name: "ic_huy_thanh_toan_internet",
						icon: "assets/images/web/icons/white/ic_card-lock.svg",
						link: "/tindung/dichvuthe/huydkttinternet",
						isChecked: !1,
						inMore: !0
					}, {
						code: "C6",
						name: "ic_thay_doi_han_muc_ngay_cua_the",
						icon: "assets/images/web/icons/white/ic_card-lock.svg",
						link: "/tindung/dichvuthe/thaydoihanmucthe",
						isChecked: !1,
						inMore: !0
					}, {
						code: "C7",
						name: "ic_thay_doi_khoan_thanh_toan_chi_dinh",
						icon: "assets/images/web/icons/white/ic_card-lock.svg",
						link: "/tindung/dichvuthe/thaydoitkchidinh",
						isChecked: !1,
						inMore: !0
					}, {
						code: "C8",
						name: "ic_dang_ky_email_nhan_card_otp",
						icon: "assets/images/web/icons/white/ic_card-lock.svg",
						link: "/tindung/dichvuthe/dangkyemailotp",
						isChecked: !1,
						inMore: !0
					}, {
						code: "C9",
						name: "ic_huy_dang_ky_email_nhan_card_otp",
						icon: "assets/images/web/icons/white/ic_card-lock.svg",
						link: "/tindung/dichvuthe/huydkemailotp",
						isChecked: !1,
						inMore: !0
					}]
				}], l.menuFavDefault = [{
					code: "T1",
					name: "ic_chuyen_tien_vcb",
					icon: "assets/images/web/icons/white/ic_chuyen-tien.svg",
					link: "/chuyentien/chuyentientronghethong/:checksum",
					isChecked: !1
				}, {
					code: "T2",
					name: "ic_chuyen_tien_nhanh_247",
					icon: "assets/images/web/icons/white/ic_chuyen-tien-nhanh.svg",
					link: "/chuyentien/chuyentienquataikhoan/:checksum",
					isChecked: !1
				}, {
					code: "T4",
					name: "ic_chuyen_tien_ngoai",
					icon: "assets/images/web/icons/white/ic_chuyen-tien-ngoai.svg",
					link: "/chuyentien/chuyentienquanhnn/:checksum",
					isChecked: !1
				}, {
					code: "S1",
					name: "ic_mo_tiet_kiem",
					icon: "assets/images/web/icons/white/ic_mo-tiet-kiem.svg",
					link: "/tienguitructuyen/motaikhoantietkiem/:checksum",
					isChecked: !1
				}, {
					code: "S2",
					name: "ic_nop_tiet_kiem",
					icon: "assets/images/web/icons/white/ic_nop-tiet-kiem.svg",
					link: "/tienguitructuyen/noptienvaotaikhoan/:checksum",
					isChecked: !1
				}, {
					code: "C3",
					name: "ic_card_lock",
					icon: "assets/images/web/icons/white/ic_card-lock.svg",
					link: "/tindung/dichvuthe/khoathe",
					isChecked: !1
				}], l
			})();
			u.d(n, "c", (function() {
				return t.a
			})), u.d(n, "a", (function() {
				return e.a
			})), u.d(n, "b", (function() {
				return r
			}))
		},
		"YXz+": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return e
			}));
			var t = u("lelo");
			class e {
				constructor(l, n, u) {
					this.storageService = l, this.thisDialogRef = n, this.data = u
				}
				ngOnInit() {
					let l = localStorage.getItem("lang");
					this.language = l && "vi" != l ? t.a.en : t.a.vi, this.currentLangSubscription = this.storageService.changes.subscribe(l => {
						this.language = "lang" == l.key && "vi" == l.value ? t.a.vi : t.a.en
					})
				}
				ngOnDestroy() {
					this.currentLangSubscription.unsubscribe()
				}
				onCloseConfirm() {
					this.thisDialogRef.close("Confirm")
				}
				onCloseCancel() {
					this.thisDialogRef.close("Cancel")
				}
			}
		},
		YovI: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		Yqwp: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor(l, n) {
					this.elementRef = l, this.renderer = n, this.classToApply = "highlight"
				}
				ngOnChanges(l) {
					this.textSearch && this.renderer.setProperty(this.elementRef.nativeElement, "innerHTML", this.keywords && this.keywords.length && this.classToApply ? this.getFormattedText() : this.textSearch)
				}
				getFormattedText() {
					const l = new RegExp(`(${this.keywords})`, "gi");
					return this.textSearch.replace(l, `<span class="${this.classToApply}">$1</span>`)
				}
			}
		},
		Z4ou: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return g
			}));
			var t = u("8Y7J"),
				e = u("SVse"),
				r = u("lYIE"),
				a = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"]))], null, null)
			}

			function s(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n tr\xedch n\u1ee3"]))], null, null)
			}

			function c(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"]))], null, null)
			}

			function o(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Amount"]))], null, null)
			}

			function b(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ghi c\xf3"])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Amount"])), (l()(), t.rb(7, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(8, null, ["", " VND"]))], null, (function(l, n) {
					l(n, 8, 0, n.component.data.tranResult.transaction.exchangeAmount)
				}))
			}

			function h(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 193, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["X\xc1C NH\u1eacN Y\xcaU C\u1ea6U CHUY\u1ec2N TI\u1ec0N \u0110\u1ecaNH K\u1ef2"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Payment Order Confirmation)"])), (l()(), t.rb(12, 0, null, null, 138, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y l\u1eadp l\u1ec7nh"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order date"])), (l()(), t.rb(20, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(29, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(30, null, ["", ""])), (l()(), t.rb(31, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(38, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(39, null, ["", ""])), (l()(), t.rb(40, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Account"])), (l()(), t.rb(47, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(48, null, ["", ""])), (l()(), t.rb(49, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(56, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), (l()(), t.rb(58, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\xe2n h\xe0ng h\u01b0\u1edfng"])), (l()(), t.rb(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Bank Name"])), (l()(), t.rb(65, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(66, null, ["", ""])), (l()(), t.rb(67, 0, null, null, 12, "tr", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, i)), t.qb(70, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, s)), t.qb(72, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(73, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, c)), t.qb(75, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, o)), t.qb(77, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(78, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(79, null, ["", " ", ""])), (l()(), t.gb(16777216, null, null, 1, null, b)), t.qb(81, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(82, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), t.rb(83, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(84, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Chu k\u1ef3 chuy\u1ec3n"])), (l()(), t.rb(86, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(87, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Payment Frequency"])), (l()(), t.rb(89, 0, null, null, 4, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(90, null, ["", " ", "/l\u1ea7n "])), (l()(), t.rb(91, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(92, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(93, null, ["Once every ", " ", "", ""])), (l()(), t.rb(94, 0, null, null, 16, "tr", [], null, null, null, null, null)), (l()(), t.rb(95, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(96, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y b\u1eaft \u0111\u1ea7u"])), (l()(), t.rb(98, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(99, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["First transfer date"])), (l()(), t.rb(101, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(102, null, ["", ""])), (l()(), t.rb(103, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(104, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y k\u1ebft th\xfac"])), (l()(), t.rb(106, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(107, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Last Transfer date"])), (l()(), t.rb(109, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(110, null, ["", ""])), (l()(), t.rb(111, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(112, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(113, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(115, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(116, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Fee type "])), (l()(), t.rb(118, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(119, null, [" ", ""])), (l()(), t.rb(120, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(121, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(122, null, ["", ""])), (l()(), t.rb(123, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(124, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(125, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(127, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(128, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Amount"])), (l()(), t.rb(130, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(132, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(134, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(135, null, ["", " VND "])), (l()(), t.rb(136, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(138, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(139, null, [" ", " VND "])), (l()(), t.rb(140, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(141, null, [" ", " VND"])), (l()(), t.rb(142, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(143, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(144, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung chuy\u1ec3n ti\u1ec1n"])), (l()(), t.rb(146, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(147, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Remark "])), (l()(), t.rb(149, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(150, null, ["", ""])), (l()(), t.rb(151, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(152, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(154, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(155, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(157, 0, null, null, 36, "div", [], null, null, null, null, null)), (l()(), t.rb(158, 0, null, null, 3, "p", [], null, null, null, null, null)), (l()(), t.rb(159, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": X\xe1c nh\u1eadn th\xf4ng tin chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a Vietcombank v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba."])), (l()(), t.rb(162, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed v\xe0 t\u1ef7 gi\xe1 quy \u0111\u1ed5i ch\u1ec9 mang t\xednh ch\u1ea5t tham kh\u1ea3o t\u1ea1i th\u1eddi \u0111i\u1ec3m l\u1eadp l\u1ec7nh v\xe0 s\u1ebd \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng theo quy \u0111\u1ecbnh c\u1ee7a Vietcombank t\u1ea1i th\u1eddi \u0111i\u1ec3m h\u1ea1ch to\xe1n giao d\u1ecbch"])), (l()(), t.rb(164, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Please note that: This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(166, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["The above information of fee amount and exchange rate is for reference only. Fee amount and exchange rate to be applied to payment transaction will be announced and applied by the Bank at the time the payment is processed. "])), (l()(), t.rb(168, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(170, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(172, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(175, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(177, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(180, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(182, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(184, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(186, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(188, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(190, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(192, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], (function(l, n) {
					var u = n.component;
					l(n, 70, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 72, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 75, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 77, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 81, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy)
				}), (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 30, 0, u.data.tranResult.transaction.tranId), l(n, 39, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 48, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 57, 0, u.data.tranResult.transaction.creditAccountName), l(n, 66, 0, u.data.tranResult.transaction.creditBankName), l(n, 79, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 90, 0, u.data.interval, u.data.dateUnit.name), l(n, 93, 0, u.data.interval, u.data.dateUnit.nameEN, u.data.interval > 1 ? "s" : ""), l(n, 102, 0, u.data.tranResult.transaction.startDate), l(n, 110, 0, u.data.tranResult.transaction.endDate), l(n, 119, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 122, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 135, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 139, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 141, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 150, 0, u.data.tranResult.transaction.content)
				}))
			}

			function d(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, h, a)), t.qb(1, 114688, null, 0, r.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var g = t.nb("ng-component", r.a, d, {
				data: "data"
			}, {}, [])
		},
		ZkNS: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return g
			}));
			var t = u("8Y7J"),
				e = u("SVse"),
				r = u("EKeg"),
				a = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"]))], null, null)
			}

			function s(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n tr\xedch n\u1ee3"]))], null, null)
			}

			function c(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"]))], null, null)
			}

			function o(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Amount"]))], null, null)
			}

			function b(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ghi c\xf3"])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Amount"])), (l()(), t.rb(7, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(8, null, ["", " VND"]))], null, (function(l, n) {
					l(n, 8, 0, n.component.data.tranResult.transaction.exchangeAmount)
				}))
			}

			function h(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 193, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["X\xc1C NH\u1eacN Y\xcaU C\u1ea6U CHUY\u1ec2N TI\u1ec0N \u0110\u1ecaNH K\u1ef2"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Payment Order Confirmation)"])), (l()(), t.rb(12, 0, null, null, 138, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y l\u1eadp l\u1ec7nh"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order date"])), (l()(), t.rb(20, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(29, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(30, null, ["", ""])), (l()(), t.rb(31, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(38, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(39, null, ["", ""])), (l()(), t.rb(40, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Account"])), (l()(), t.rb(47, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(48, null, ["", ""])), (l()(), t.rb(49, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(56, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), (l()(), t.rb(58, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\xe2n h\xe0ng h\u01b0\u1edfng"])), (l()(), t.rb(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Bank Name"])), (l()(), t.rb(65, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Vietcombank"])), (l()(), t.rb(67, 0, null, null, 12, "tr", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, i)), t.qb(70, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, s)), t.qb(72, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(73, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, c)), t.qb(75, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, o)), t.qb(77, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(78, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(79, null, ["", " ", ""])), (l()(), t.gb(16777216, null, null, 1, null, b)), t.qb(81, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(82, 0, null, null, 11, "tr", [], null, null, null, null, null)), (l()(), t.rb(83, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(84, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Chu k\u1ef3 chuy\u1ec3n"])), (l()(), t.rb(86, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(87, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Payment Frequency"])), (l()(), t.rb(89, 0, null, null, 4, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(90, null, ["", " ", "/l\u1ea7n "])), (l()(), t.rb(91, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(92, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(93, null, ["Once every ", " ", "", ""])), (l()(), t.rb(94, 0, null, null, 16, "tr", [], null, null, null, null, null)), (l()(), t.rb(95, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(96, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y b\u1eaft \u0111\u1ea7u"])), (l()(), t.rb(98, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(99, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["First transfer date"])), (l()(), t.rb(101, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(102, null, ["", ""])), (l()(), t.rb(103, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(104, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y k\u1ebft th\xfac"])), (l()(), t.rb(106, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(107, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Last Transfer date"])), (l()(), t.rb(109, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(110, null, ["", ""])), (l()(), t.rb(111, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(112, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(113, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(115, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(116, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Fee type "])), (l()(), t.rb(118, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(119, null, [" ", ""])), (l()(), t.rb(120, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(121, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(122, null, ["", ""])), (l()(), t.rb(123, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(124, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(125, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(127, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(128, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Amount"])), (l()(), t.rb(130, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(132, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(134, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(135, null, ["", " VND "])), (l()(), t.rb(136, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(138, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(139, null, [" ", " VND "])), (l()(), t.rb(140, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(141, null, [" ", " VND"])), (l()(), t.rb(142, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(143, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(144, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung chuy\u1ec3n ti\u1ec1n"])), (l()(), t.rb(146, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(147, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Remark "])), (l()(), t.rb(149, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(150, null, ["", ""])), (l()(), t.rb(151, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(152, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(154, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(155, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(157, 0, null, null, 36, "div", [], null, null, null, null, null)), (l()(), t.rb(158, 0, null, null, 3, "p", [], null, null, null, null, null)), (l()(), t.rb(159, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": X\xe1c nh\u1eadn th\xf4ng tin chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a Vietcombank v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba."])), (l()(), t.rb(162, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed v\xe0 t\u1ef7 gi\xe1 quy \u0111\u1ed5i ch\u1ec9 mang t\xednh ch\u1ea5t tham kh\u1ea3o t\u1ea1i th\u1eddi \u0111i\u1ec3m l\u1eadp l\u1ec7nh v\xe0 s\u1ebd \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng theo quy \u0111\u1ecbnh c\u1ee7a Vietcombank t\u1ea1i th\u1eddi \u0111i\u1ec3m h\u1ea1ch to\xe1n giao d\u1ecbch"])), (l()(), t.rb(164, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Please note that: This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(166, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["The above information of fee amount and exchange rate is for reference only. Fee amount and exchange rate to be applied to payment transaction will be announced and applied by the Bank at the time the payment is processed. "])), (l()(), t.rb(168, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(170, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(172, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(175, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(177, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(180, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(182, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(184, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(186, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(188, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(190, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(192, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], (function(l, n) {
					var u = n.component;
					l(n, 70, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 72, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 75, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 77, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 81, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy)
				}), (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 30, 0, u.data.tranResult.transaction.tranId), l(n, 39, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 48, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 57, 0, u.data.tranResult.transaction.creditAccountName), l(n, 79, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 90, 0, u.data.interval, u.data.dateUnit.name), l(n, 93, 0, u.data.interval, u.data.dateUnit.nameEN, u.data.interval > 1 ? "s" : ""), l(n, 102, 0, u.data.tranResult.transaction.startDate), l(n, 110, 0, u.data.tranResult.transaction.endDate), l(n, 119, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 122, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 135, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 139, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 141, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 150, 0, u.data.tranResult.transaction.content)
				}))
			}

			function d(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, h, a)), t.qb(1, 114688, null, 0, r.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var g = t.nb("ng-component", r.a, d, {
				data: "data"
			}, {}, [])
		},
		a8yd: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return g
			}));
			var t = u("8Y7J"),
				e = u("SVse"),
				r = u("uhOr"),
				a = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"]))], null, null)
			}

			function s(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n tr\xedch n\u1ee3"]))], null, null)
			}

			function c(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"]))], null, null)
			}

			function o(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Amount"]))], null, null)
			}

			function b(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ghi c\xf3"])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Amount"])), (l()(), t.rb(7, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(8, null, ["", " VND"]))], null, (function(l, n) {
					l(n, 8, 0, n.component.data.tranResult.transaction.exchangeAmount)
				}))
			}

			function h(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 160, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["BI\xcaN LAI CHUY\u1ec2N TI\u1ec0N QUA T\xc0I KHO\u1ea2N"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Payment Receipt)"])), (l()(), t.rb(12, 0, null, null, 109, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y, gi\u1edd giao d\u1ecbch"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Trans. Date, Time"])), (l()(), t.rb(20, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(29, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(30, null, ["", ""])), (l()(), t.rb(31, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(38, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(39, null, ["", ""])), (l()(), t.rb(40, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Account"])), (l()(), t.rb(47, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(48, null, ["", ""])), (l()(), t.rb(49, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(56, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), (l()(), t.rb(58, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\xe2n h\xe0ng h\u01b0\u1edfng"])), (l()(), t.rb(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Bank Name"])), (l()(), t.rb(65, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(66, null, ["", ""])), (l()(), t.rb(67, 0, null, null, 12, "tr", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, i)), t.qb(70, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, s)), t.qb(72, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(73, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, c)), t.qb(75, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, o)), t.qb(77, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(78, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(79, null, ["", " ", ""])), (l()(), t.gb(16777216, null, null, 1, null, b)), t.qb(81, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(82, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(83, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(84, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(86, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(87, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Code"])), (l()(), t.rb(89, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(90, null, [" ", ""])), (l()(), t.rb(91, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(92, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(93, null, ["", ""])), (l()(), t.rb(94, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(95, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(96, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(98, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(99, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Amount"])), (l()(), t.rb(101, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(103, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(105, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(106, null, ["", " VND "])), (l()(), t.rb(107, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(109, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(110, null, [" ", " VND "])), (l()(), t.rb(111, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(112, null, [" ", " VND"])), (l()(), t.rb(113, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(114, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(115, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung chuy\u1ec3n ti\u1ec1n"])), (l()(), t.rb(117, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(118, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Details of Payment"])), (l()(), t.rb(120, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(121, null, ["", ""])), (l()(), t.rb(122, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(123, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(125, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(126, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(128, 0, null, null, 32, "div", [], null, null, null, null, null)), (l()(), t.rb(129, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": Bi\xean lai chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a NHTMCP Ngo\u1ea1i Th\u01b0\u01a1ng Vi\u1ec7t Nam v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba."])), (l()(), t.rb(132, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(133, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(135, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(137, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(139, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(142, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(144, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(147, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(149, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(151, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(153, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(155, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(157, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(159, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], (function(l, n) {
					var u = n.component;
					l(n, 70, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 72, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 75, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 77, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 81, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy)
				}), (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 30, 0, u.data.tranResult.transaction.tranId), l(n, 39, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 48, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 57, 0, u.data.tranResult.transaction.creditAccountName), l(n, 66, 0, u.data.tranResult.transaction.creditBankName), l(n, 79, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 90, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 93, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 106, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 110, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 112, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 121, 0, u.data.tranResult.transaction.content)
				}))
			}

			function d(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, h, a)), t.qb(1, 114688, null, 0, r.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var g = t.nb("ng-component", r.a, d, {
				data: "data"
			}, {}, [])
		},
		"aR/e": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		b52f: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return g
			}));
			var t = u("8Y7J"),
				e = u("SVse"),
				r = u("+bJz"),
				a = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"]))], null, null)
			}

			function s(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n tr\xedch n\u1ee3"]))], null, null)
			}

			function c(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"]))], null, null)
			}

			function o(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Amount"]))], null, null)
			}

			function b(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ghi c\xf3"])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Amount"])), (l()(), t.rb(7, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(8, null, ["", " VND"]))], null, (function(l, n) {
					l(n, 8, 0, n.component.data.tranResult.transaction.exchangeAmount)
				}))
			}

			function h(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 172, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["X\xc1C NH\u1eacN Y\xcaU C\u1ea6U CHUY\u1ec2N TI\u1ec0N NG\xc0Y T\u01af\u01a0NG LAI"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Payment Order Confirmation)"])), (l()(), t.rb(12, 0, null, null, 117, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 16, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y l\u1eadp l\u1ec7nh"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order date"])), (l()(), t.rb(20, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y hi\u1ec7u l\u1ef1c"])), (l()(), t.rb(25, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(26, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Effective Date"])), (l()(), t.rb(28, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(29, null, ["", ""])), (l()(), t.rb(30, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(31, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(34, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(35, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(37, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(38, null, ["", ""])), (l()(), t.rb(39, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(40, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(43, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(44, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(46, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(47, null, ["", ""])), (l()(), t.rb(48, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(49, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(52, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(53, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Account"])), (l()(), t.rb(55, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(56, null, ["", ""])), (l()(), t.rb(57, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(58, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(61, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(62, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(64, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(65, null, ["", ""])), (l()(), t.rb(66, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(67, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\xe2n h\xe0ng h\u01b0\u1edfng"])), (l()(), t.rb(70, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(71, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Bank Name"])), (l()(), t.rb(73, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(74, null, ["", ""])), (l()(), t.rb(75, 0, null, null, 12, "tr", [], null, null, null, null, null)), (l()(), t.rb(76, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, i)), t.qb(78, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, s)), t.qb(80, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(81, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, c)), t.qb(83, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, o)), t.qb(85, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(86, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(87, null, ["", " ", ""])), (l()(), t.gb(16777216, null, null, 1, null, b)), t.qb(89, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(90, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(91, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(92, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(94, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(95, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Fee type"])), (l()(), t.rb(97, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(98, null, [" ", ""])), (l()(), t.rb(99, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(100, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(101, null, ["", ""])), (l()(), t.rb(102, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(103, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(104, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(106, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(107, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Amount"])), (l()(), t.rb(109, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(111, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(113, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(114, null, ["", " VND "])), (l()(), t.rb(115, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(117, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(118, null, [" ", " VND "])), (l()(), t.rb(119, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(120, null, [" ", " VND"])), (l()(), t.rb(121, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(122, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(123, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung chuy\u1ec3n ti\u1ec1n"])), (l()(), t.rb(125, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(126, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Remark"])), (l()(), t.rb(128, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(129, null, ["", ""])), (l()(), t.rb(130, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(131, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(133, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(134, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(136, 0, null, null, 36, "div", [], null, null, null, null, null)), (l()(), t.rb(137, 0, null, null, 3, "p", [], null, null, null, null, null)), (l()(), t.rb(138, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": X\xe1c nh\u1eadn th\xf4ng tin chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a Vietcombank v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba"])), (l()(), t.rb(141, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed v\xe0 t\u1ef7 gi\xe1 quy \u0111\u1ed5i ch\u1ec9 mang t\xednh ch\u1ea5t tham kh\u1ea3o t\u1ea1i th\u1eddi \u0111i\u1ec3m l\u1eadp l\u1ec7nh v\xe0 s\u1ebd \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng theo quy \u0111\u1ecbnh c\u1ee7a Vietcombank t\u1ea1i th\u1eddi \u0111i\u1ec3m h\u1ea1ch to\xe1n giao d\u1ecbch."])), (l()(), t.rb(143, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Please note that: This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(145, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["The above information of fee amount and exchange rate is for reference only. Fee amount and exchange rate to be applied to payment transaction will be announced and applied by the Bank at the time the payment is processed."])), (l()(), t.rb(147, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(149, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(151, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(154, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(156, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(159, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(161, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(163, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(165, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(167, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(169, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(171, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], (function(l, n) {
					var u = n.component;
					l(n, 78, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 80, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 83, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 85, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 89, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy)
				}), (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 29, 0, u.data.tranResult.transaction.specificDate), l(n, 38, 0, u.data.tranResult.transaction.tranId), l(n, 47, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 56, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 65, 0, u.data.tranResult.transaction.creditAccountName), l(n, 74, 0, u.data.tranResult.transaction.creditBankName), l(n, 87, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 98, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 101, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 114, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 118, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 120, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 129, 0, u.data.tranResult.transaction.content)
				}))
			}

			function d(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, h, a)), t.qb(1, 114688, null, 0, r.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var g = t.nb("ng-component", r.a, d, {
				data: "data"
			}, {}, [])
		},
		brVl: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		cLPv: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("2sep"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		cX4K: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		"ct+p": function(l, n, u) {
			"use strict";
			u.d(n, "b", (function() {
				return e
			})), u.d(n, "a", (function() {
				return r
			}));
			var t = u("j9H2");

			function e(l) {
				return new t.a(l, [])
			}
			class r {}
		},
		"d/F/": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		d2mR: function(l, n, u) {
			"use strict";
			u.d(n, "b", (function() {
				return e
			})), u.d(n, "a", (function() {
				return r
			}));
			var t = u("j9H2");

			function e(l) {
				return new t.a(l, [{
					prefix: "./assets/i18n/app/",
					suffix: ".json"
				}])
			}
			class r {}
		},
		dPnz: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		eCIQ: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return g
			}));
			var t = u("8Y7J"),
				e = u("SVse"),
				r = u("J0em"),
				a = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"]))], null, null)
			}

			function s(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n tr\xedch n\u1ee3"]))], null, null)
			}

			function c(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"]))], null, null)
			}

			function o(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Amount"]))], null, null)
			}

			function b(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ghi c\xf3"])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Amount"])), (l()(), t.rb(7, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(8, null, ["", " VND"]))], null, (function(l, n) {
					l(n, 8, 0, n.component.data.tranResult.transaction.exchangeAmount)
				}))
			}

			function h(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 160, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["BI\xcaN LAI CHUY\u1ec2N TI\u1ec0N QUA T\xc0I KHO\u1ea2N"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Payment Receipt)"])), (l()(), t.rb(12, 0, null, null, 109, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y, gi\u1edd giao d\u1ecbch"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Trans. Date, Time"])), (l()(), t.rb(20, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(29, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(30, null, ["", ""])), (l()(), t.rb(31, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(38, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(39, null, ["", ""])), (l()(), t.rb(40, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Account"])), (l()(), t.rb(47, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(48, null, ["", ""])), (l()(), t.rb(49, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(56, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), (l()(), t.rb(58, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\xe2n h\xe0ng h\u01b0\u1edfng"])), (l()(), t.rb(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Bank Name"])), (l()(), t.rb(65, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Vietcombank"])), (l()(), t.rb(67, 0, null, null, 12, "tr", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, i)), t.qb(70, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, s)), t.qb(72, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(73, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, c)), t.qb(75, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, o)), t.qb(77, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(78, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(79, null, ["", " ", ""])), (l()(), t.gb(16777216, null, null, 1, null, b)), t.qb(81, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(82, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(83, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(84, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(86, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(87, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Code"])), (l()(), t.rb(89, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(90, null, [" ", ""])), (l()(), t.rb(91, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(92, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(93, null, ["", ""])), (l()(), t.rb(94, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(95, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(96, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(98, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(99, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Amount"])), (l()(), t.rb(101, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(103, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(105, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(106, null, ["", " VND "])), (l()(), t.rb(107, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(109, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(110, null, [" ", " VND "])), (l()(), t.rb(111, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(112, null, [" ", " VND"])), (l()(), t.rb(113, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(114, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(115, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung chuy\u1ec3n ti\u1ec1n"])), (l()(), t.rb(117, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(118, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Details of Payment"])), (l()(), t.rb(120, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(121, null, ["", ""])), (l()(), t.rb(122, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(123, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(125, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(126, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(128, 0, null, null, 32, "div", [], null, null, null, null, null)), (l()(), t.rb(129, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": Bi\xean lai chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a NHTMCP Ngo\u1ea1i Th\u01b0\u01a1ng Vi\u1ec7t Nam v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba."])), (l()(), t.rb(132, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(133, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(135, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(137, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(139, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(142, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(144, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(147, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(149, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(151, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(153, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(155, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(157, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(159, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], (function(l, n) {
					var u = n.component;
					l(n, 70, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 72, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 75, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 77, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 81, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy)
				}), (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 30, 0, u.data.tranResult.transaction.tranId), l(n, 39, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 48, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 57, 0, u.data.tranResult.transaction.creditAccountName), l(n, 79, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 90, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 93, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 106, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 110, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 112, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 121, 0, u.data.tranResult.transaction.content)
				}))
			}

			function d(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, h, a)), t.qb(1, 114688, null, 0, r.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var g = t.nb("ng-component", r.a, d, {
				data: "data"
			}, {}, [])
		},
		eSQ3: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("8nTM"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 154, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["BI\xcaN LAI CHUY\u1ec2N TI\u1ec0N QUA T\xc0I KHO\u1ea2N"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Payment Receipt)"])), (l()(), t.rb(12, 0, null, null, 103, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y, gi\u1edd giao d\u1ecbch"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Trans. Date, Time"])), (l()(), t.rb(20, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(29, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(30, null, ["", ""])), (l()(), t.rb(31, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(38, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(39, null, ["", ""])), (l()(), t.rb(40, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Account"])), (l()(), t.rb(47, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(48, null, ["", ""])), (l()(), t.rb(49, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(56, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), (l()(), t.rb(58, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\xe2n h\xe0ng h\u01b0\u1edfng"])), (l()(), t.rb(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Bank Name"])), (l()(), t.rb(65, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Vietcombank"])), (l()(), t.rb(67, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(69, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"])), (l()(), t.rb(71, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(72, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"])), (l()(), t.rb(74, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(75, null, ["", " ", ""])), (l()(), t.rb(76, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(77, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(78, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(80, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(81, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Code"])), (l()(), t.rb(83, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(84, null, [" ", ""])), (l()(), t.rb(85, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(86, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(87, null, ["", ""])), (l()(), t.rb(88, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(89, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(90, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(92, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(93, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Amount"])), (l()(), t.rb(95, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(97, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(99, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(100, null, ["", " VND "])), (l()(), t.rb(101, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(103, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(104, null, [" ", " VND "])), (l()(), t.rb(105, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(106, null, [" ", " VND"])), (l()(), t.rb(107, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(108, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(109, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung chuy\u1ec3n ti\u1ec1n"])), (l()(), t.rb(111, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(112, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Details of Payment"])), (l()(), t.rb(114, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(115, null, ["", ""])), (l()(), t.rb(116, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(117, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(119, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(120, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(122, 0, null, null, 32, "div", [], null, null, null, null, null)), (l()(), t.rb(123, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": Bi\xean lai chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a NHTMCP Ngo\u1ea1i Th\u01b0\u01a1ng Vi\u1ec7t Nam v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba."])), (l()(), t.rb(126, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(127, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(129, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(131, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(133, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(136, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(138, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(141, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(143, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(145, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(147, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(149, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(151, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(153, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], null, (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 30, 0, u.data.tranResult.transaction.tranId), l(n, 39, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 48, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 57, 0, u.data.tranResult.transaction.creditAccountName), l(n, 75, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 84, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 87, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 100, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 104, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 106, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 115, 0, u.data.tranResult.transaction.content)
				}))
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		eoIH: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		giTn: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return e
			}));
			var t = u("2Vo4");
			class e {
				constructor() {
					this.showSubject = new t.a(!1), this.isShow = this.showSubject.asObservable()
				}
				show() {
					this.showSubject.next(!0)
				}
				hide() {
					this.showSubject.next(!1)
				}
			}
		},
		guZo: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("dPnz"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 154, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["BI\xcaN LAI N\u1ed8P B\u1ea2O HI\u1ec2M X\xc3 H\u1ed8I"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Social Insurance Payment Receipt)"])), (l()(), t.rb(12, 0, null, null, 103, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y, gi\u1edd giao d\u1ecbch"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Trans. Date, Time"])), (l()(), t.rb(20, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(29, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(30, null, ["", ""])), (l()(), t.rb(31, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(38, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(39, null, ["", ""])), (l()(), t.rb(40, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account Name"])), (l()(), t.rb(47, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(48, null, ["", ""])), (l()(), t.rb(49, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Account"])), (l()(), t.rb(56, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), (l()(), t.rb(58, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(65, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(66, null, ["", ""])), (l()(), t.rb(67, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(69, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"])), (l()(), t.rb(71, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(72, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"])), (l()(), t.rb(74, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(75, null, ["", " ", ""])), (l()(), t.rb(76, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(77, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(78, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(80, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(81, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Code"])), (l()(), t.rb(83, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(84, null, [" ", ""])), (l()(), t.rb(85, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(86, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(87, null, ["", ""])), (l()(), t.rb(88, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(89, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(90, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(92, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(93, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Amount"])), (l()(), t.rb(95, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(97, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(99, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(100, null, ["", " VND "])), (l()(), t.rb(101, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(103, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(104, null, [" ", " VND "])), (l()(), t.rb(105, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(106, null, [" ", " VND"])), (l()(), t.rb(107, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(108, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(109, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung thanh to\xe1n"])), (l()(), t.rb(111, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(112, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Details of Payment"])), (l()(), t.rb(114, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(115, null, ["", ""])), (l()(), t.rb(116, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(117, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(119, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(120, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(122, 0, null, null, 32, "div", [], null, null, null, null, null)), (l()(), t.rb(123, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": Bi\xean lai chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a NHTMCP Ngo\u1ea1i Th\u01b0\u01a1ng Vi\u1ec7t Nam v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba."])), (l()(), t.rb(126, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(127, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(129, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(131, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(133, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(136, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(138, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(141, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(143, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(145, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(147, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(149, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(151, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(153, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], null, (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.tranTime), l(n, 30, 0, u.data.tranResult.transaction.tranId), l(n, 39, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 48, 0, u.data.tranResult.transaction.debitAccountName), l(n, 57, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 66, 0, u.data.tranResult.transaction.siName), l(n, 75, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 84, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 87, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 100, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 104, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 106, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 115, 0, u.data.tranResult.transaction.remark)
				}))
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		heEX: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		j45v: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		j9H2: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return c
			}));
			var t = u("mrSG"),
				e = u("wd/R"),
				r = u("cp0P"),
				a = u("lJxs"),
				i = u("XgRA");
			const {
				version: s
			} = u("o29C");
			class c {
				constructor(l, n = [{
					prefix: "/assets/i18n/app/",
					suffix: ".json"
				}]) {
					this.http = l, this.resources = n
				}
				cacheLang(l) {
					return t.a(this, void 0, void 0, (function*() {
						try {
							const n = 30,
								u = yield this.manageCacheKey(n), t = yield caches.open(u), e = yield t.match(l);
							return e && e.ok ? yield e.json(): (yield t.add(l), yield this.http.get(l).toPromise())
						} catch (n) {
							return yield this.http.get(l).toPromise()
						}
					}))
				}
				manageCacheKey(l) {
					return t.a(this, void 0, void 0, (function*() {
						const n = new RegExp(i.a.StoreKey.LANGUAGE_CACHE_STORAGE_PREFIX, "gi"),
							u = yield caches.keys();
						let t;
						for (const r of u)
							if (r.search(n) >= 0) {
								const [, n] = r.split(i.a.StoreKey.LANGUAGE_CACHE_STORAGE_PREFIX);
								if (e().diff(e(parseInt(n, 10)), "minutes") <= l) {
									t = r;
									break
								}
							} for (const l of u) l !== t && caches.delete(l);
						return t || `${i.a.StoreKey.LANGUAGE_CACHE_STORAGE_PREFIX}${Date.now()}`
					}))
				}
				getTranslation(l) {
					return Object(r.a)(this.resources.map(n => t.a(this, void 0, void 0, (function*() {
						const u = `${n.prefix}${l}${n.suffix}?v=${s}`;
						return yield this.cacheLang(u)
					})))).pipe(Object(a.a)(l => l.reduce((l, n) => Object.assign(l, n))))
				}
			}
		},
		kKWH: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		"kT/C": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("j45v"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		"kVK+": function(l, n) {
			n.read = function(l, n, u, t, e) {
				var r, a, i = 8 * e - t - 1,
					s = (1 << i) - 1,
					c = s >> 1,
					o = -7,
					b = u ? e - 1 : 0,
					h = u ? -1 : 1,
					d = l[n + b];
				for (b += h, r = d & (1 << -o) - 1, d >>= -o, o += i; o > 0; r = 256 * r + l[n + b], b += h, o -= 8);
				for (a = r & (1 << -o) - 1, r >>= -o, o += t; o > 0; a = 256 * a + l[n + b], b += h, o -= 8);
				if (0 === r) r = 1 - c;
				else {
					if (r === s) return a ? NaN : 1 / 0 * (d ? -1 : 1);
					a += Math.pow(2, t), r -= c
				}
				return (d ? -1 : 1) * a * Math.pow(2, r - t)
			}, n.write = function(l, n, u, t, e, r) {
				var a, i, s, c = 8 * r - e - 1,
					o = (1 << c) - 1,
					b = o >> 1,
					h = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
					d = t ? 0 : r - 1,
					g = t ? 1 : -1,
					m = n < 0 || 0 === n && 1 / n < 0 ? 1 : 0;
				for (n = Math.abs(n), isNaN(n) || n === 1 / 0 ? (i = isNaN(n) ? 1 : 0, a = o) : (a = Math.floor(Math.log(n) / Math.LN2), n * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (n += a + b >= 1 ? h / s : h * Math.pow(2, 1 - b)) * s >= 2 && (a++, s /= 2), a + b >= o ? (i = 0, a = o) : a + b >= 1 ? (i = (n * s - 1) * Math.pow(2, e), a += b) : (i = n * Math.pow(2, b - 1) * Math.pow(2, e), a = 0)); e >= 8; l[u + d] = 255 & i, d += g, i /= 256, e -= 8);
				for (a = a << e | i, c += e; c > 0; l[u + d] = 255 & a, d += g, a /= 256, c -= 8);
				l[u + d - g] |= 128 * m
			}
		},
		kcWY: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("YovI"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		lC1C: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("GBX2"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		lPbr: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		lYIE: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		lelo: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			const t = {
				investTxnType1: "Giao d\u1ecbch t\u1eeb t\xe0i kho\u1ea3n",
				investTxnType1_EN: "Transaction from account",
				investTxnType2: "Giao d\u1ecbch t\u1eeb th\u1ebb",
				investTxnType2_EN: "Card transaction",
				interestPaymentMethods1: "L\xe3i nh\u1eadp g\u1ed1c",
				interestPaymentMethods1_EN: "Compound interest",
				interestPaymentMethods2: "L\xe3i tr\u1ea3 v\xe0o t\xe0i kho\u1ea3n ti\u1ec1n g\u1eedi khi \u0111\u1ebfn h\u1ea1n tr\u1ea3 l\xe3i",
				interestPaymentMethods2_EN: "Interest paid to current account",
				functionNames1: "\u0110\u0103ng k\xfd d\u1ecbch v\u1ee5",
				functionNames1_EN: "Registration",
				functionNames2: "Thay \u0111\u1ed5i s\u1ed1 t\xe0i kho\u1ea3n tr\xedch n\u1ee3",
				functionNames2_EN: "Change debit account",
				functionNames3: "Ng\u1eebng d\u1ecbch v\u1ee5",
				functionNames3_EN: "Cancellation",
				lblChuyenTienTrongHeThong: "Chuy\u1ec3n ti\u1ec1n trong h\u1ec7 th\u1ed1ng",
				lblChuyenTienTrongHeThong_EN: "Internal transfer",
				lblChuyenTienQuaNHNN: "Chuy\u1ec3n ti\u1ec1n ngo\xe0i VCB",
				lblChuyenTienQuaNHNN_EN: "External transfer",
				lblChuyenTienQuaTaiKhoan: "Chuy\u1ec3n ti\u1ec1n nhanh 24/7 qua t\xe0i kho\u1ea3n",
				lblChuyenTienQuaTaiKhoan_EN: "Quick transfer 24/7 to other banks via account",
				lblChuyenTienQuaThe: "Chuy\u1ec3n ti\u1ec1n nhanh 24/7 qua th\u1ebb",
				lblChuyenTienQuaThe_EN: "Quick transfer 24/7 to other banks via card",
				lblChuyenTienNgayGiaTriHienTai: "Chuy\u1ec3n ti\u1ec1n ng\xe0y gi\xe1 tr\u1ecb hi\u1ec7n t\u1ea1i",
				lblChuyenTienNgayGiaTriHienTai_EN: "One-time payment",
				lblChuyenTienToiNguoiNhanTaiQuay: "Chuy\u1ec3n ti\u1ec1n m\u1eb7t",
				lblChuyenTienToiNguoiNhanTaiQuay_EN: "Cash transfer",
				lblChuyenTienNgayTuongLai: "Chuy\u1ec3n ti\u1ec1n ng\xe0y t\u01b0\u01a1ng lai",
				lblChuyenTienNgayTuongLai_EN: "Future payment",
				lblChuyenTienTuongLaiTrong: "Chuy\u1ec3n ti\u1ec1n t\u01b0\u01a1ng lai trong h\u1ec7 th\u1ed1ng",
				lblChuyenTienTuongLaiTrong_EN: "Future payment within Vietcombank",
				lblChuyenTienTuongLaiNgoai: "Chuy\u1ec3n ti\u1ec1n t\u01b0\u01a1ng lai ngo\xe0i h\u1ec7 th\u1ed1ng",
				lblChuyenTienTuongLaiNgoai_EN: "Future payment to other banks",
				lblChuyenTienDinhKy: "Chuy\u1ec3n ti\u1ec1n \u0111\u1ecbnh k\u1ef3",
				lblChuyenTienDinhKy_EN: "Periodic payment",
				lblChuyenTienDinhKyTrong: "Chuy\u1ec3n ti\u1ec1n \u0111\u1ecbnh k\u1ef3 trong h\u1ec7 th\u1ed1ng",
				lblChuyenTienDinhKyTrong_EN: "Periodic payment within Vietcombank",
				lblChuyenTienDinhKyNgoai: "Chuy\u1ec3n ti\u1ec1n \u0111\u1ecbnh k\u1ef3 ngo\xe0i h\u1ec7 th\u1ed1ng",
				lblChuyenTienDinhKyNgoai_EN: "Periodic payment to other banks",
				lblCancelLenhChuyenTien: "\u0110\xe3 h\u1ee7y",
				lblCancelLenhChuyenTien_EN: "Cancelled",
				lblCMND: "Ch\u1ee9ng minh th\u01b0 nh\xe2n d\xe2n",
				lblCMND_EN: "ID",
				lblHoChieu: "H\u1ed9 chi\u1ebfu",
				lblHoChieu_EN: "Passport",
				lblQuanDoi: "CMT Qu\xe2n \u0111\u1ed9i",
				lblQuanDoi_EN: "Military ID",
				lblTCCCDan: "Th\u1ebb c\u0103n c\u01b0\u1edbc c\xf4ng d\xe2n",
				lblTCCCDan_EN: "Citizen ID",
				vi: {
					message: {
						network_offline: "Qu\xfd kh\xe1ch vui l\xf2ng ki\u1ec3m tra k\u1ebft n\u1ed1i Internet/3G/Wifi"
					}
				},
				en: {
					message: {
						network_offline: "Please check your Internet/3G/Wifi connection."
					}
				}
			}
		},
		lrWp: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return r
			}));
			var t = u("2Vo4"),
				e = u("8Y7J");
			let r = (() => {
				class l {
					constructor() {
						this.events = new t.a(!1)
					}
					get surveyInit() {
						return this.events.asObservable()
					}
					activeSurvey() {
						this.events.next(!0)
					}
					deactiveSurvey() {
						this.events.next(!1)
					}
				}
				return l.ngInjectableDef = e.Rb({
					factory: function() {
						return new l
					},
					token: l,
					providedIn: "root"
				}), l
			})()
		},
		lt74: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("X6sQ"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		ml7P: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("uBqB"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		o29C: function(l) {
			l.exports = JSON.parse('{"version":"1.0.9","major":1,"minor":0,"patch":9,"dev":{"pre":"alpha","build":87,"raw":"1.0.7-alpha.87","time":"2020-08-12 14:43:57"},"testing":{"pre":"beta","build":6,"raw":"1.0.7-beta.6","time":"2020-08-12 09:21:01"},"pilot":{"pre":"rc","build":0,"raw":""},"live":{"pre":"","build":0,"raw":"1.0.9","time":"2020-08-12 15:22:27"}}')
		},
		o3Bc: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return o
			}));
			var t = u("8Y7J"),
				e = u("SVse"),
				r = u("HmbI"),
				a = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n tr\xedch n\u1ee3"])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Amount"])), (l()(), t.rb(7, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(8, null, ["", " ", ""]))], null, (function(l, n) {
					var u = n.component;
					l(n, 8, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy)
				}))
			}

			function s(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 110, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["BI\xcaN LAI THANH TO\xc1N SAO K\xca TH\u1eba T\xcdN D\u1ee4NG"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Credit Card Payment Receipt)"])), (l()(), t.rb(12, 0, null, null, 65, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y, gi\u1edd giao d\u1ecbch"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Trans. Date, Time"])), (l()(), t.rb(20, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(29, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(30, null, ["", ""])), (l()(), t.rb(31, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Th\u01b0\u01a1ng hi\u1ec7u th\u1ebb"])), (l()(), t.rb(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Card brand"])), (l()(), t.rb(38, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(39, null, ["", ""])), (l()(), t.rb(40, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 th\u1ebb"])), (l()(), t.rb(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Card number"])), (l()(), t.rb(47, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(48, null, ["", ""])), (l()(), t.rb(49, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(56, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), (l()(), t.rb(58, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n thanh to\xe1n"])), (l()(), t.rb(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Payment Amount"])), (l()(), t.rb(65, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(66, null, ["", " VND"])), (l()(), t.gb(16777216, null, null, 1, null, i)), t.qb(68, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(69, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(70, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(71, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung thanh to\xe1n (*)"])), (l()(), t.rb(73, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(74, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Details of Payment "])), (l()(), t.rb(76, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(77, null, ["THANH TOAN SK ", " ", " KY SAO KE ", ""])), (l()(), t.rb(78, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(79, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(81, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(82, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(84, 0, null, null, 26, "div", [], null, null, null, null, null)), (l()(), t.rb(85, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(87, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(89, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(92, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(94, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(97, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(99, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(101, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(103, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(105, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(107, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(109, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], (function(l, n) {
					l(n, 68, 0, "VND" !== n.component.data.tranResult.transaction.debitAccountCcy)
				}), (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 30, 0, u.data.tranResult.transaction.tranId), l(n, 39, 0, u.data.tranResult.card.cardName), l(n, 48, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 57, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 66, 0, u.data.tranResult.transaction.exchangeAmount), l(n, 77, 0, u.data.tranResult.transaction.cusName, u.data.tranResult.transaction.creditCardNo, u.data.tranResult.cardInfo.lastStmtDate)
				}))
			}

			function c(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, s, a)), t.qb(1, 114688, null, 0, r.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var o = t.nb("ng-component", r.a, c, {
				data: "data"
			}, {}, [])
		},
		o9tF: function(l, n, u) {
			"use strict";
			var t = u("8Y7J"),
				e = u("SVse");
			u("KD2G"), u.d(n, "a", (function() {
				return r
			})), u.d(n, "b", (function() {
				return i
			}));
			var r = t.pb({
				encapsulation: 0,
				styles: [
					[""]
				],
				data: {}
			});

			function a(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "button", [
					["class", "ubtn ubg-blank ubtn-circle-md modal-close ripple-100 legitRipple"],
					["data-dismiss", "modal"],
					["type", "button"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 0, "img", [
					["alt", ""],
					["src", "./assets/images/base/icons/close/square/base.svg"]
				], null, null, null, null, null))], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "div", [
					["aria-hidden", "true"],
					["class", "modal fade"],
					["role", "dialog"],
					["tabindex", "-1"]
				], [
					[1, "id", 0],
					[1, "aria-labelledby", 0]
				], null, null, null, null)), (l()(), t.rb(1, 0, null, null, 7, "div", [
					["role", "document"]
				], [
					[8, "className", 0]
				], null, null, null, null)), (l()(), t.rb(2, 0, null, null, 6, "div", [
					["class", "modal-content"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 3, "div", [
					["class", "modal-header"]
				], null, null, null, null, null)), t.Cb(null, 0), (l()(), t.gb(16777216, null, null, 1, null, a)), t.qb(6, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), t.Cb(null, 1), t.Cb(null, 2)], (function(l, n) {
					l(n, 6, 0, n.component.isShowClose)
				}), (function(l, n) {
					var u = n.component;
					l(n, 0, 0, u.id, u.id), l(n, 1, 0, t.vb(2, "modal-dialog modal-dialog-centered modal-", u.size, " ", u.class, ""))
				}))
			}
		},
		oyXx: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return e
			}));
			var t = u("tRjT");
			let e = (() => {
				class l {
					static getLang() {
						return this.getLocale().split("-")[0]
					}
					static getLocale() {
						return localStorage.getItem("lang") || localStorage.setItem("lang", "vi"), localStorage.getItem("lang")
					}
					static getCurrentUser() {
						return JSON.parse(sessionStorage.getItem(t.a.StoreKey.USER_INFO))
					}
					static setSelectAccount(l) {
						const n = this.getCurrentUser();
						n.selectAccount = l, sessionStorage.setItem(t.a.StoreKey.USER_INFO, JSON.stringify(n))
					}
					static clearSelectAccount() {
						const l = this.getCurrentUser();
						l.selectAccount = {}, sessionStorage.setItem(t.a.StoreKey.USER_INFO, JSON.stringify(l))
					}
					static setSelectCommonItem(l) {
						const n = this.getCurrentUser();
						n.selectItem = l, sessionStorage.setItem(t.a.StoreKey.USER_INFO, JSON.stringify(n))
					}
					static clearSelectCommonItem() {
						const l = this.getCurrentUser();
						l.selectItem = {}, sessionStorage.setItem(t.a.StoreKey.USER_INFO, JSON.stringify(l))
					}
					static getSteps() {
						return [{
							code: 1,
							name: "Kh\u1edfi t\u1ea1o",
							nameEN: "Init"
						}, {
							code: 2,
							name: "X\xe1c nh\u1eadn",
							nameEN: "Confirm"
						}, {
							code: 3,
							name: "X\xe1c th\u1ef1c",
							nameEN: "Verify"
						}, {
							code: 4,
							name: "K\u1ebft qu\u1ea3",
							nameEN: "Result"
						}]
					}
					static getSteps3() {
						return [{
							code: 1,
							name: "Kh\u1edfi t\u1ea1o",
							nameEN: "Init"
						}, {
							code: 2,
							name: "X\xe1c th\u1ef1c",
							nameEN: "Verify"
						}, {
							code: 3,
							name: "K\u1ebft qu\u1ea3",
							nameEN: "Result"
						}]
					}
					static getSteps3Confirm() {
						return [{
							code: 1,
							name: "Kh\u1edfi t\u1ea1o",
							nameEN: "Init"
						}, {
							code: 2,
							name: "X\xe1c nh\u1eadn",
							nameEN: "Confirm"
						}, {
							code: 3,
							name: "K\u1ebft qu\u1ea3",
							nameEN: "Result"
						}]
					}
					static getSteps2() {
						return [{
							code: 1,
							name: "Kh\u1edfi t\u1ea1o",
							nameEN: "Init"
						}, {
							code: 2,
							name: "K\u1ebft qu\u1ea3",
							nameEN: "Result"
						}]
					}
					static getSteps5() {
						return [{
							code: 1,
							name: "Tra c\u1ee9u",
							nameEN: "Search"
						}, {
							code: 2,
							name: "Kh\u1edfi t\u1ea1o",
							nameEN: "Init"
						}, {
							code: 3,
							name: "X\xe1c nh\u1eadn",
							nameEN: "Confirm"
						}, {
							code: 4,
							name: "X\xe1c th\u1ef1c",
							nameEN: "Verify"
						}, {
							code: 5,
							name: "K\u1ebft qu\u1ea3",
							nameEN: "Result"
						}]
					}
					static getStepsBooking() {
						return [{
							code: 1,
							name: "Kh\u1edfi t\u1ea1o",
							nameEN: "Init"
						}, {
							code: 2,
							name: "Th\xf4ng tin kh\xe1ch h\xe0ng",
							nameEN: "Th\xf4ng tin kh\xe1ch h\xe0ng"
						}, {
							code: 3,
							name: "S\u1ea3n ph\u1ea9m d\u1ecbch v\u1ee5",
							nameEN: "S\u1ea3n ph\u1ea9m d\u1ecbch v\u1ee5"
						}, {
							code: 4,
							name: "Ho\xe0n th\xe0nh",
							nameEN: "Result"
						}]
					}
					static getTopupPayments(l = ["3", "4", "5", "9", "11"]) {
						const n = new Map([
								["3", {
									code: "3",
									name: "N\u1ea1p ti\u1ec1n \u0111i\u1ec7n t\u1eed v\xe0o v\xed",
									nameEN: "Topup Ewallet"
								}],
								["4", {
									code: "4",
									name: "N\u1ea1p ti\u1ec1n \u0111i\u1ec7n t\u1eed v\xe0o th\u1ebb",
									nameEN: "Topup Card"
								}],
								["5", {
									code: "5",
									name: "N\u1ea1p ti\u1ec1n t\xe0i kho\u1ea3n VETC",
									nameEN: "Topup VETC"
								}],
								["9", {
									code: "9",
									name: "N\u1ed9p ti\u1ec1n cho c\xf4ng ty ch\u1ee9ng kho\xe1n",
									nameEN: "Pay money to securities companies"
								}],
								["11", {
									code: "11",
									name: "N\u1ea1p ti\u1ec1n \u0111\u1ea1i l\xfd",
									nameEN: "Topup agents"
								}]
							]),
							u = new Map;
						return l.forEach(l => {
							u.set(l, n.get(l))
						}), u
					}
					static getTopupPrices() {
						return new Map([
							["30000", {
								code: "30000",
								name: "30,000 VND",
								nameEN: "30,000 VND"
							}],
							["50000", {
								code: "50000",
								name: "50,000 VND",
								nameEN: "50,000 VND"
							}],
							["100000", {
								code: "100000",
								name: "100,000 VND",
								nameEN: "100,000 VND"
							}],
							["200000", {
								code: "200000",
								name: "200,000 VND",
								nameEN: "200,000 VND"
							}],
							["300000", {
								code: "300000",
								name: "300,000 VND",
								nameEN: "300,000 VND"
							}],
							["500000", {
								code: "500000",
								name: "500,000 VND",
								nameEN: "500,000 VND"
							}]
						])
					}
					static getFormTran() {
						const l = new Map;
						return [{
							code: "1",
							name: "Chuy\u1ec3n ti\u1ec1n ng\xe0y gi\xe1 tr\u1ecb hi\u1ec7n t\u1ea1i",
							nameEN: "One-time payment"
						}, {
							code: "2",
							name: "Chuy\u1ec3n ti\u1ec1n t\u01b0\u01a1ng lai",
							nameEN: "Future payment"
						}, {
							code: "3",
							name: "Chuy\u1ec3n ti\u1ec1n \u0111\u1ecbnh k\u1ef3",
							nameEN: "Periodic payment"
						}].forEach(n => {
							l.set(n.code, n)
						}), l
					}
					static getObjBHXH() {
						const l = new Map;
						return [{
							code: "2",
							name: "N\u1ed9p cho Kh\xe1ch h\xe0ng c\xe1 nh\xe2n",
							nameEN: "Pay for individuals"
						}, {
							code: "1",
							name: "N\u1ed9p cho Kh\xe1ch h\xe0ng t\u1ed5 ch\u1ee9c",
							nameEN: "Pay for corporate"
						}].forEach(n => {
							l.set(n.code, n)
						}), l
					}
					static getMonths(l) {
						if (l) {
							const n = new Map;
							return l.split(",").forEach(l => {
								const u = {
									code: l,
									name: l + " th\xe1ng",
									nameEN: l + " months"
								};
								n.set(u.code, u)
							}), n
						} {
							const l = [{
									code: "3",
									name: "3 th\xe1ng",
									nameEN: "3 months"
								}, {
									code: "6",
									name: "6 th\xe1ng",
									nameEN: "6 months"
								}, {
									code: "9",
									name: "9 th\xe1ng",
									nameEN: "9 months"
								}, {
									code: "12",
									name: "12 th\xe1ng",
									nameEN: "12 months"
								}],
								n = new Map;
							return l.forEach(l => {
								n.set(l.code, l)
							}), n
						}
					}
					static getFormFastTran() {
						const l = new Map;
						return [{
							code: "1",
							name: "Chuy\u1ec3n ti\u1ec1n nhanh 24/7 qua t\xe0i kho\u1ea3n",
							nameEN: "Quick transfer 24/7 to other banks via account"
						}, {
							code: "2",
							name: "Chuy\u1ec3n ti\u1ec1n nhanh 24/7 qua th\u1ebb",
							nameEN: "Quick transfer 24/7 to other banks via card"
						}].forEach(n => {
							l.set(n.code, n)
						}), l
					}
					static getFormRegister() {
						const l = new Map;
						return [{
							code: "1",
							name: "T\u1ea5t c\u1ea3 t\xe0i kho\u1ea3n",
							nameEN: "All accounts"
						}, {
							code: "2",
							name: "S\u1ed1 t\xe0i kho\u1ea3n m\u1eb7c \u0111\u1ecbnh",
							nameEN: "Default account"
						}].forEach(n => {
							l.set(n.code, n)
						}), l
					}
					static getAuthenMethods(l = ["1", "2", "3", "4", "5", "6", "7"], n = []) {
						const u = new Map;
						u.set("1", {
							code: "1",
							name: "SMS OTP",
							nameEN: "SMS OTP"
						}), u.set("2", {
							code: "2",
							name: "V\xe2n tay/FaceID",
							nameEN: "Touch"
						}), u.set("3", {
							code: "3",
							name: "M\u1eadt kh\u1ea9u \u0111\u0103ng nh\u1eadp",
							nameEN: "Password"
						}), u.set("4", {
							code: "4",
							name: "VCB-Smart OTP",
							nameEN: "VCB-Smart OTP"
						}), u.set("5", {
							code: "5",
							name: "VCB-Smart OTP",
							nameEN: "VCB-Smart OTP"
						}), u.set("6", {
							code: "6",
							name: "Hard token",
							nameEN: "Hard token"
						}), u.set("7", {
							code: "7",
							name: "Hard token n\xe2ng cao",
							nameEN: "Hard token advance"
						});
						const t = new Map;
						return l.forEach(l => {
							const e = u.get(l);
							e.fee = {}, n.forEach(n => {
								n.methodOTP === l && (e.fee = n)
							}), t.set(l, e)
						}), t
					}
					static getDayInWord() {
						return "en" === localStorage.getItem("lang") ? [{
							code: "1",
							name: "Th\u1ee9 Hai",
							icon: null,
							list: null
						}, {
							code: "2",
							name: "Th\u1ee9 Ba",
							icon: null,
							list: null
						}, {
							code: "3",
							name: "Th\u1ee9 T\u01b0",
							icon: null,
							list: null
						}, {
							code: "4",
							name: "Th\u1ee9 N\u0103m",
							icon: null,
							list: null
						}, {
							code: "5",
							name: "Th\u1ee9 S\xe1u",
							icon: null,
							list: null
						}, {
							code: "6",
							name: "Th\u1ee9 B\u1ea3y",
							icon: null,
							list: null
						}, {
							code: "7",
							name: "Ch\u1ee7 Nh\u1eadt",
							icon: null,
							list: null
						}] : [{
							code: "1",
							name: "Monday",
							icon: null,
							list: null
						}, {
							code: "2",
							name: "Tuesday",
							icon: null,
							list: null
						}, {
							code: "3",
							name: "Wednesday",
							icon: null,
							list: null
						}, {
							code: "4",
							name: "Thursday",
							icon: null,
							list: null
						}, {
							code: "5",
							name: "Friday",
							icon: null,
							list: null
						}, {
							code: "6",
							name: "Saturday",
							icon: null,
							list: null
						}, {
							code: "7",
							name: "Sunday",
							icon: null,
							list: null
						}]
					}
					static getTranTypesByOrder(l) {
						const n = new Map([
							["1", {
								code: "1",
								name: "Chuy\u1ec3n ti\u1ec1n ng\xe0y gi\xe1 tr\u1ecb hi\u1ec7n t\u1ea1i",
								nameEN: "",
								list: new Map([
									["1.1", {
										code: "1.1",
										name: "Chuy\u1ec3n ti\u1ec1n trong h\u1ec7 th\u1ed1ng",
										nameEN: ""
									}],
									["1.2", {
										code: "1.2",
										name: "Chuy\u1ec3n ti\u1ec1n t\u1edbi NH kh\xe1c qua NHNN",
										nameEN: ""
									}],
									["1.3", {
										code: "1.3",
										name: "Chuy\u1ec3n ti\u1ec1n nhanh 24/7 qua t\xe0i kho\u1ea3n",
										nameEN: ""
									}],
									["1.4", {
										code: "1.4",
										name: "Chuy\u1ec3n ti\u1ec1n nhanh 24/7 qua th\u1ebb",
										nameEN: ""
									}]
								])
							}],
							["2", {
								code: "2",
								name: "Chuy\u1ec3n ti\u1ec1n t\u1edbi ng\u01b0\u1eddi nh\u1eadn t\u1ea1i qu\u1ea7y",
								nameEN: "",
								list: new Map([
									["2", {
										code: "2",
										name: "Chuy\u1ec3n ti\u1ec1n t\u1edbi ng\u01b0\u1eddi nh\u1eadn t\u1ea1i qu\u1ea7y",
										nameEN: ""
									}]
								])
							}],
							["3", {
								code: "3",
								name: "Chuy\u1ec3n ti\u1ec1n ng\xe0y t\u01b0\u01a1ng lai",
								nameEN: "",
								list: new Map([
									["3.1", {
										code: "3.1",
										name: "Chuy\u1ec3n ti\u1ec1n t\u01b0\u01a1ng lai trong h\u1ec7 th\u1ed1ng",
										nameEN: ""
									}],
									["3.2", {
										code: "3.2",
										name: "Chuy\u1ec3n ti\u1ec1n t\u01b0\u01a1ng lai ngo\xe0i h\u1ec7 th\u1ed1ng",
										nameEN: ""
									}]
								])
							}],
							["4", {
								code: "4",
								name: "Chuy\u1ec3n ti\u1ec1n \u0111\u1ecbnh k\u1ef3",
								nameEN: "",
								list: new Map([
									["4.1", {
										code: "4.1",
										name: "Chuy\u1ec3n ti\u1ec1n \u0111\u1ecbnh k\u1ef3 trong h\u1ec7 th\u1ed1ng",
										nameEN: ""
									}],
									["4.2", {
										code: "4.2",
										name: "Chuy\u1ec3n ti\u1ec1n \u0111\u1ecbnh k\u1ef3 ngo\xe0i h\u1ec7 th\u1ed1ng",
										nameEN: ""
									}]
								])
							}]
						]);
						let u = new Map;
						switch (l) {
							case "31":
							case "32":
								u.set("3", n.get("3"));
								break;
							case "41":
							case "42":
								u.set("4", n.get("4"));
								break;
							default:
								u = new Map([...n])
						}
						return u
					}
					static getCardTypes() {
						return new Map([
							["1", {
								code: "1",
								name: "Th\u1ebb t\xedn d\u1ee5ng",
								nameEN: "Credit card"
							}],
							["2", {
								code: "2",
								name: "Th\u1ebb ghi n\u1ee3",
								nameEN: "Debit card"
							}]
						])
					}
					static getDateUnits() {
						const l = new Map;
						return [{
							code: "4",
							name: "Ng\xe0y",
							nameEN: "Day"
						}, {
							code: "5",
							name: "Tu\u1ea7n",
							nameEN: "Week"
						}, {
							code: "6",
							name: "Th\xe1ng",
							nameEN: "Month"
						}].forEach(n => {
							l.set(n.code, n)
						}), l
					}
					static maskPhoneNumber(l) {
						return l ? l.substring(0, 3) + "****" + l.substring(l.length - 3) : ""
					}
					static formatCurrency(l, n) {
						if ("VND" === l) return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); {
							let u = n.toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
							return u = this.formatCurrencyString(l, u), u
						}
					}
					static formatCurrencyString(l, n) {
						return n
					}
					static convertVietnameseCharacters(l) {
						let n = l;
						return n = n.replace(/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g, "a"), n = n.replace(/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g, "A"), n = n.replace(/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g, "e"), n = n.replace(/E|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g, "E"), n = n.replace(/\xec|\xed|\u1ecb|\u1ec9|\u0129/g, "i"), n = n.replace(/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g, "I"), n = n.replace(/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g, "o"), n = n.replace(/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g, "O"), n = n.replace(/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g, "u"), n = n.replace(/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g, "U"), n = n.replace(/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g, "y"), n = n.replace(/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g, "Y"), n = n.replace(/\u0111/g, "d"), n = n.replace(/\u0110/g, "D"), n
					}
					static cleanMoney(l) {
						return l && l.replace(/[^0-9.]+/g, "")
					}
					static getRuleLogoCard() {
						return [{
							prefix: "379",
							cardName: "AMEX"
						}, {
							prefix: "377967",
							cardName: "AMEX"
						}, {
							prefix: "438103",
							cardName: "VISA"
						}, {
							prefix: "514003",
							cardName: "MASTERCARD"
						}, {
							prefix: "5462",
							cardName: "MASTERCARD"
						}, {
							prefix: "4129",
							cardName: "VISA"
						}, {
							prefix: "3567",
							cardName: "JCB"
						}, {
							prefix: "6251",
							cardName: "Cup"
						}, {
							prefix: "377",
							cardName: "AMEX"
						}, {
							prefix: "4773",
							cardName: "VISA"
						}, {
							prefix: "4283",
							cardName: "VISA"
						}, {
							prefix: "5264",
							cardName: "MASTERCARD"
						}, {
							prefix: "4032",
							cardName: "VISA"
						}, {
							prefix: "6212",
							cardName: "Cup"
						}, {
							prefix: "970436",
							cardName: "VCB"
						}, {
							prefix: "4524",
							cardName: "VISA"
						}, {
							prefix: "2228",
							cardName: "MASTERCARD"
						}, {
							prefix: "4691",
							cardName: "VISA"
						}]
					}
				}
				return l.enumMethod = {
					1: "SMS OTP",
					2: "V\xe2n tay/FaceID",
					3: "M\u1eadt kh\u1ea9u \u0111\u0103ng nh\u1eadp",
					4: "VCB-Smart OTP",
					5: "VCB-Smart OTP",
					6: "Hard token",
					7: "Hard token n\xe2ng cao"
				}, l.enumMethodEN = {
					1: "SMS OTP",
					2: "Touch",
					3: "Password",
					4: "VCB-Smart OTP",
					5: "VCB-Smart OTP",
					6: "Hard token",
					7: "Hard token advance"
				}, l
			})()
		},
		pW6c: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return v
			}));
			var t = u("IheW"),
				e = u("tjlA"),
				r = u("HEbw"),
				a = u.n(r),
				i = u("NFKh"),
				s = u("qou/"),
				c = u("2Vo4"),
				o = u("lJxs"),
				b = u("gFX4"),
				h = u("AytR"),
				d = u("oyXx"),
				g = u("tRjT"),
				m = u("8Y7J"),
				p = u("47AC"),
				f = u("CxY0");
			let v = (() => {
				class l {
					constructor(l, n) {
						this.http = l, this.storeService = n, this.pair = s({
							kty: "PKCS8",
							modulusLength: 2048
						}), this.errorNotDefine = "H\u1ec7 th\u1ed1ng t\u1ea1m th\u1eddi gi\xe1n \u0111o\u1ea1n. Qu\xfd kh\xe1ch vui l\xf2ng th\u1eed l\u1ea1i", this.currentUserSubject = new c.a(JSON.parse(this.storeService.getFromSession(g.a.StoreKey.USER_INFO))), this.currentUser = this.currentUserSubject.asObservable(), this.apiUrl = h.a.apiUrl, h.a.apiUrl && "" !== h.a.apiUrl || (this.apiUrl = location.origin + h.a.apiPath)
					}
					get currentUserValue() {
						return this.currentUserSubject.value
					}
					connectSocket() {
						console.log("socket connect ...");
						let l = h.a.socketUrl;
						h.a.apiUrl && "" !== h.a.apiUrl || (l = location.origin + h.a.socketUrl);
						let n = f.parse(l).pathname,
							u = h.a.socketUrl;
						"/" !== n && (u = h.a.socketUrl.replace(n, "")), n += "/socket.io", n = n.replace("//", "/"), this.mySocket = b(u, {
							extraHeaders: {},
							path: n
						})
					}
					login(l, n, u, t) {
						return new Promise((e, r) => {
							let a = {
								user_name: l,
								password: n,
								socket_id: u,
								captcha_id: t,
								clientKey: this.pair.public,
								lang: d.a.getLang()
							};
							this.encryptAES(JSON.stringify(a), h.a.publicKey).then(l => this.http.post(this.apiUrl + "/auth", {
								data: l
							}).toPromise().then(l => {
								"00" === l.code ? this.decryptAES(l.data, this.pair.private).then(l => {
									const n = JSON.parse(l);
									this.storeService.storeInSession(g.a.StoreKey.SESSION_TIMEOUT, (60 * n.durationExpire).toString()), this.storeService.storeInSession(g.a.StoreKey.ACCESS_KEY, n.accessKey), "00" !== n.code && "67" !== n.code || !n.token ? "06" !== n.code && "10" !== n.code && "116" !== n.code || !n.token || this.storeService.storeInSession(g.a.StoreKey.JWT_TOKEN, n.token) : (this.storeService.storeInSession(g.a.StoreKey.JWT_TOKEN, n.token), this.storeService.storeInSession(g.a.StoreKey.USER_INFO, JSON.stringify(n.user_info)), this.currentUserSubject.next(n.user_info)), e(n)
								}).catch(l => {
									console.log("9701:", l), e({
										code: "9701",
										des: this.errorNotDefine
									})
								}) : e({
									code: l.code,
									des: l.des
								})
							}).catch(l => {
								console.log("9702:", l), e({
									code: "9702",
									des: this.errorNotDefine
								})
							})).catch(l => {
								console.log("9703:", l), e({
									code: "9703",
									des: this.errorNotDefine
								})
							})
						})
					}
					saveUserInfo(l) {
						this.storeService.storeInSession(g.a.StoreKey.JWT_TOKEN, l.token), this.storeService.storeInSession(g.a.StoreKey.USER_INFO, JSON.stringify(l.user_info)), this.currentUserSubject.next(l.user_info)
					}
					sendlogout() {
						return console.log("AuthenticationService.sendlogout ..."), this.http.post(this.apiUrl + "/logout", {
							user_name: this.currentUserSubject.value.user_name,
							cif: this.currentUserSubject.value.cif,
							session_id: this.currentUserSubject.value.session_id
						}).pipe(Object(o.a)(l => l))
					}
					cleanCacheStorage() {
						try {
							return caches.keys().then(l => {
								l.forEach(l => {
									l.includes(g.a.StoreKey.LANGUAGE_CACHE_STORAGE_PREFIX) && caches.delete(l)
								})
							})
						} catch (l) {}
					}
					logout(l) {
						console.log("AuthenticationService.logout ..."), console.log("close mySocket ..."), this.mySocket && this.mySocket.close(), this.storeService.remove(g.a.StoreKey.USER_INFO), this.storeService.remove(g.a.StoreKey.LOGIN_STATE), this.storeService.remove(g.a.StoreKey.BILL_SERVICES), this.storeService.remove(g.a.StoreKey.JWT_TOKEN), this.storeService.remove(g.a.StoreKey.SESSION_TIMEOUT), this.currentUserSubject.next(null), this.cleanCacheStorage()
					}
					checksum(l, n, u) {
						return i.MD5(l).toString()
					}
					encode(l, n) {
						return i.AES.encrypt(l, n).toString()
					}
					decode(l, n) {
						return i.AES.decrypt(l, n).toString(i.enc.Utf8)
					}
					validCaptcha(l) {
						return this.http.post(this.apiUrl + "/valid-captcha", l, {})
					}
					validCaptcha2(l) {
						const n = {};
						return new Promise((u, t) => {
							this.http.post(this.apiUrl + "/valid-captcha", l, n).toPromise().then(l => {
								u(l)
							}).catch(l => {
								t({
									code: "9704",
									des: l
								})
							})
						})
					}
					validCMND(l, n) {
						let u = {
							user_name: l,
							cmnd: n,
							lang: d.a.getLang()
						};
						return this.http.post(this.apiUrl + "/valid-cmnd", u).pipe(Object(o.a)(l => l))
					}
					validOTP(l, n) {
						let u = {
							user_name: l,
							otp: n,
							lang: d.a.getLang()
						};
						return this.http.post(this.apiUrl + "/valid-otp", u).pipe(Object(o.a)(l => l))
					}
					createOTP(l, n) {
						let u = {
							user_name: l,
							E: n,
							lang: d.a.getLang()
						};
						return this.http.post(this.apiUrl + "/create-otp", u).pipe(Object(o.a)(l => l))
					}
					reCreateOTP(l) {
						let n = {
							user_name: l,
							lang: d.a.getLang()
						};
						return this.http.post(this.apiUrl + "/recreate-otp", n).pipe(Object(o.a)(l => l))
					}
					encryptAES(l, n) {
						return new Promise((u, t) => {
							const r = (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)).substring(0, 32),
								s = e.Buffer.from(r, "utf8"),
								c = i.enc.Base64.parse(r);
							var o = i.AES.encrypt(l, c, {
								mode: i.mode.ECB,
								padding: i.pad.Pkcs7
							});
							u(a.a.publicEncrypt({
								key: n,
								padding: a.a.constants.RSA_PKCS1_PADDING
							}, s).toString("base64") + "@@@@@@" + o.toString())
						})
					}
					decryptAES(l, n) {
						return new Promise((u, t) => {
							try {
								let t = e.Buffer.from(l.substring(0, 344), "base64");
								Promise.resolve(!0).then(() => a.a.privateDecrypt({
									key: n,
									padding: a.a.constants.RSA_PKCS1_PADDING
								}, t).toString()).then(n => {
									let t = i.enc.Base64.parse(n);
									var e = i.AES.decrypt(l.substring(344), t, {
										mode: i.mode.ECB,
										padding: i.pad.Pkcs7
									});
									u(e.toString(i.enc.Utf8))
								})
							} catch (r) {
								t(r)
							}
						})
					}
					encrypt(l, n, u) {
						return new Promise((t, r) => {
							let i = n.slice(0, 245),
								s = a.a.publicEncrypt({
									key: u,
									padding: a.a.constants.RSA_PKCS1_PADDING
								}, i),
								c = n.slice(245);
							t(c.length > 0 ? this.encrypt(e.Buffer.concat([l, s]), c, u) : e.Buffer.concat([l, s]))
						})
					}
					decrypt(l, n, u) {
						return new Promise((t, e) => {
							let r = n.slice(0, 256),
								i = a.a.privateDecrypt({
									key: u,
									padding: a.a.constants.RSA_PKCS1_PADDING
								}, r).toString(),
								s = n.slice(256);
							t(s.length > 0 ? this.decrypt(l + i, s, u) : l + i)
						})
					}
					decrypt200(l, n, u) {
						let t = 0;
						return new Promise((r, i) => {
							for (n.length == t && r(l); n.length > t;) {
								let i = a.a.privateDecrypt({
									key: u,
									padding: a.a.constants.RSA_PKCS1_PADDING
								}, n[t].data);
								l = e.Buffer.concat([l, i]), t++, n.length == t && r(l.toString())
							}
						})
					}
					checkPassActiveORReactive(l, n, u) {
						return new Promise((e, r) => {
							Promise.resolve(!0).then(() => {
								let t = {
									user_name: l,
									activeType: "1",
									defaultPass: n,
									newPass: u,
									clientKey: this.pair.public,
									lang: d.a.getLang()
								};
								return this.encryptAES(JSON.stringify(t), h.a.publicKey).then(l => l)
							}).then(l => {
								let n = new t.g({
									"Content-Type": "application/json",
									Authorization: `Bearer ${this.storeService.getFromSession(g.a.StoreKey.JWT_TOKEN)}`
								});
								return this.http.post(this.apiUrl + "/checkpassactiveorreactive", {
									data: l
								}, {
									headers: n
								}).toPromise().then(l => {
									"00" == l.code ? this.decryptAES(l.data, this.pair.private).then(l => {
										let n = JSON.parse(l);
										e(n)
									}).catch(l => {
										console.log("9705:", l), e({
											code: "9705",
											des: this.errorNotDefine
										})
									}) : e({
										code: l.code,
										des: l.des
									})
								}).catch(l => {
									console.log("9706:", l), e({
										code: "9706",
										des: this.errorNotDefine
									})
								})
							})
						})
					}
					checkOTPActiveORReactive(l, n, u) {
						return new Promise((e, r) => {
							Promise.resolve(!0).then(() => {
								let t = {
									user_name: l,
									sessionId: n,
									otp: u,
									clientKey: this.pair.public,
									lang: d.a.getLang(),
									socket_id: this.mySocket.id
								};
								return this.encryptAES(JSON.stringify(t), h.a.publicKey).then(l => l)
							}).then(l => {
								let n = new t.g({
									"Content-Type": "application/json",
									Authorization: `Bearer ${this.storeService.getFromSession(g.a.StoreKey.JWT_TOKEN)}`
								});
								return this.http.post(this.apiUrl + "/checkotpactiveorreactive", {
									data: l
								}, {
									headers: n
								}).toPromise().then(l => {
									"00" == l.code ? this.decryptAES(l.data, this.pair.private).then(l => {
										let n = JSON.parse(l);
										console.log("checkOTPActiveORReactive:res_data_json", n), "00" == n.code && n.token && (this.storeService.storeInSession(g.a.StoreKey.JWT_TOKEN, n.token), this.storeService.storeInSession(g.a.StoreKey.ACCESS_KEY, n.accessKey), console.log("res_data_json.user_info"), console.log(n.user_info), this.storeService.storeInSession(g.a.StoreKey.USER_INFO, JSON.stringify(n.user_info)), this.currentUserSubject.next(n.user_info)), e(n)
									}).catch(l => {
										console.log("9707:", l), e({
											code: "9707",
											des: this.errorNotDefine
										})
									}) : e({
										code: l.code,
										des: l.des
									})
								}).catch(l => {
									console.log("9708:", l), e({
										code: "9708",
										des: this.errorNotDefine
									})
								})
							})
						})
					}
					initRegisMB(l, n, u, e, r) {
						return new Promise((a, i) => {
							Promise.resolve(!0).then(() => {
								let t = {
									user: l,
									pass: n,
									accountNo: u,
									email: e,
									E: r,
									clientKey: this.pair.public,
									lang: d.a.getLang()
								};
								return this.encryptAES(JSON.stringify(t), h.a.publicKey).then(l => l)
							}).then(l => {
								let n = new t.g({
									"Content-Type": "application/json",
									Authorization: `Bearer ${this.storeService.getFromSession(g.a.StoreKey.JWT_TOKEN)}`
								});
								return this.http.post(this.apiUrl + "/initregismb", {
									data: l
								}, {
									headers: n
								}).toPromise().then(l => {
									"00" == l.code ? this.decryptAES(l.data, this.pair.private).then(l => {
										let n = JSON.parse(l);
										a(n)
									}).catch(l => {
										console.log("9709:", l), a({
											code: "9709",
											des: this.errorNotDefine
										})
									}) : a({
										code: l.code,
										des: l.des
									})
								}).catch(l => {
									console.log("9710:", l), a({
										code: "9710",
										des: this.errorNotDefine
									})
								})
							})
						})
					}
					verifyRegisMB(l, n, u, e) {
						return new Promise((r, a) => {
							Promise.resolve(!0).then(() => {
								let t = {
									user_name: l,
									otp: n,
									pass: u,
									E: e,
									clientKey: this.pair.public,
									lang: d.a.getLang(),
									socket_id: this.mySocket.id
								};
								return this.encryptAES(JSON.stringify(t), h.a.publicKey).then(l => l)
							}).then(l => {
								let n = new t.g({
									"Content-Type": "application/json",
									Authorization: `Bearer ${this.storeService.getFromSession(g.a.StoreKey.JWT_TOKEN)}`
								});
								return this.http.post(this.apiUrl + "/verifyregismb", {
									data: l
								}, {
									headers: n
								}).toPromise().then(l => {
									"00" == l.code ? this.decryptAES(l.data, this.pair.private).then(l => {
										let n = JSON.parse(l);
										"00" == n.code && n.token && (this.storeService.storeInSession(g.a.StoreKey.JWT_TOKEN, n.token), this.storeService.storeInSession(g.a.StoreKey.ACCESS_KEY, n.accessKey), console.log("res_data_json.user_info"), console.log(n.user_info), this.storeService.storeInSession(g.a.StoreKey.USER_INFO, JSON.stringify(n.user_info)), this.currentUserSubject.next(n.user_info)), r(n)
									}).catch(l => {
										console.log("9711:", l), r({
											code: "9711",
											des: this.errorNotDefine
										})
									}) : r({
										code: l.code,
										des: l.des
									})
								}).catch(l => {
									console.log("9712:", l), r({
										code: "9712",
										des: this.errorNotDefine
									})
								})
							})
						})
					}
					initResetPassword(l, n, u) {
						return new Promise((t, e) => {
							Promise.resolve(!0).then(() => {
								let t = {
									user: l,
									issueId: n,
									email: u,
									clientKey: this.pair.public,
									lang: d.a.getLang()
								};
								return this.encryptAES(JSON.stringify(t), h.a.publicKey).then(l => l)
							}).then(l => this.http.post(this.apiUrl + "/initresetpassword", {
								data: l
							}).toPromise().then(l => {
								"00" == l.code ? this.decryptAES(l.data, this.pair.private).then(l => {
									let n = JSON.parse(l);
									t(n)
								}).catch(l => {
									console.log("9713:", l), t({
										code: "9713",
										des: this.errorNotDefine
									})
								}) : t({
									code: l.code,
									des: l.des
								})
							}).catch(l => {
								console.log("9714:", l), t({
									code: "9714",
									des: this.errorNotDefine
								})
							}))
						})
					}
					createVerifyResetPassword(l, n, u, t) {
						return new Promise((e, r) => {
							Promise.resolve(!0).then(() => {
								let e = {
									user: l,
									E: n,
									authType: u,
									clientKey: this.pair.public,
									captcha_id: t,
									lang: d.a.getLang()
								};
								return this.encryptAES(JSON.stringify(e), h.a.publicKey).then(l => l)
							}).then(l => this.http.post(this.apiUrl + "/createverifyresetpassword", {
								data: l
							}).toPromise().then(l => {
								"00" == l.code ? this.decryptAES(l.data, this.pair.private).then(l => {
									let n = JSON.parse(l);
									e(n)
								}).catch(l => {
									console.log("9715:", l), e({
										code: "9715",
										des: this.errorNotDefine
									})
								}) : e({
									code: l.code,
									des: l.des
								})
							}).catch(l => {
								console.log("9716:", l), e({
									code: "9716",
									des: this.errorNotDefine
								})
							}))
						})
					}
					verifyResetPassword(l, n, u) {
						return new Promise((t, e) => {
							Promise.resolve(!0).then(() => {
								let t = {
									user: l,
									E: n,
									otp: u,
									clientKey: this.pair.public,
									lang: d.a.getLang()
								};
								return this.encryptAES(JSON.stringify(t), h.a.publicKey).then(l => l)
							}).then(l => this.http.post(this.apiUrl + "/verifyresetpassword", {
								data: l
							}).toPromise().then(l => {
								"00" == l.code ? this.decryptAES(l.data, this.pair.private).then(l => {
									let n = JSON.parse(l);
									t(n)
								}).catch(l => {
									console.log("9717:", l), t({
										code: "9717",
										des: this.errorNotDefine
									})
								}) : t({
									code: l.code,
									des: l.des
								})
							}).catch(l => {
								console.log("9718:", l), t({
									code: "9718",
									des: this.errorNotDefine
								})
							}))
						})
					}
					encryptAvatar(l) {
						return new Promise((n, u) => {
							try {
								var t = h.a.aes_key,
									e = h.a.mac_key,
									r = i.enc.Base64.stringify(i.lib.WordArray.random(16)),
									a = i.enc.Base64.parse(r),
									s = JSON.stringify(l),
									c = i.AES.encrypt(i.enc.Utf8.parse(s), i.enc.Utf8.parse(t), {
										iv: a,
										mode: i.mode.CTR,
										padding: i.pad.NoPadding
									});
								s = a.concat(c.ciphertext).toString(i.enc.Base64);
								var o = (new Date).getTime(),
									b = i.HmacSHA256(s + o, e);
								n({
									data: encodeURIComponent(s),
									data_form: s,
									timestamp: o,
									mac: encodeURIComponent(b.toString(i.enc.Base64)),
									mac_form: b.toString(i.enc.Base64)
								})
							} catch (d) {
								u(d)
							}
						})
					}
					decryptAvatar(l) {
						return new Promise((n, u) => {
							try {
								i.enc.Base64.parse(l);
								var t = i.enc.Base64.parse(l);
								t.words = t.words.slice(0, 4), t.sigBytes = 16;
								var e = i.enc.Base64.parse(l);
								e.sigBytes = e.sigBytes - 16, e.words = e.words.slice(4, e.words.length);
								var r = h.a.aes_key;
								n(i.AES.decrypt(e.toString(i.enc.Base64), i.enc.Utf8.parse(r), {
									iv: t,
									mode: i.mode.CTR,
									padding: i.pad.NoPadding
								}).toString(i.enc.Utf8))
							} catch (a) {
								u(a)
							}
						})
					}
					pingCrossLogin(l, n) {
						return new Promise((u, t) => {
							Promise.resolve(!0).then(() => this.encryptAES(JSON.stringify({
								user_name: l,
								E: n,
								clientKey: this.pair.public,
								socket_id: this.mySocket.id
							}), h.a.publicKey).then(l => l)).then(l => this.http.post(this.apiUrl + "/ping-cross-login", {
								data: l
							}).toPromise().then(l => {
								"00" === l.code ? this.decryptAES(l.data, this.pair.private).then(l => {
									let n = JSON.parse(l);
									u(n)
								}).catch(l => {
									console.log("9719:", l), u({
										code: "9719",
										des: this.errorNotDefine
									})
								}) : u({
									code: l.code,
									des: l.des
								})
							}).catch(l => {
								console.log("9720:", l), u({
									code: "9720",
									des: this.errorNotDefine
								})
							}))
						})
					}
					loginSSO(l) {
						return new Promise((n, u) => {
							let t = {
								token: l,
								clientKey: this.pair.public,
								lang: d.a.getLang()
							};
							this.encryptAES(JSON.stringify(t), h.a.publicKey).then(l => this.http.post(this.apiUrl + "/auth-sso", {
								data: l
							}).toPromise().then(l => {
								"00" === l.code ? this.decryptAES(l.data, this.pair.private).then(l => {
									const u = JSON.parse(l);
									console.log("resDataJson:", u), "00" === u.code && u.token && (this.storeService.storeInSession(g.a.StoreKey.JWT_TOKEN, u.token), this.storeService.storeInSession(g.a.StoreKey.USER_INFO, JSON.stringify(u.user_info)), this.currentUserSubject.next(u.user_info)), n(u)
								}).catch(l => {
									console.log("9701:", l), n({
										code: "9701",
										des: this.errorNotDefine
									})
								}) : n({
									code: l.code,
									des: l.des
								})
							}).catch(l => {
								console.log("9702:", l), n({
									code: "9702",
									des: this.errorNotDefine
								})
							})).catch(l => {
								console.log("9703:", l), n({
									code: "9703",
									des: this.errorNotDefine
								})
							})
						})
					}
				}
				return l.ngInjectableDef = m.Rb({
					factory: function() {
						return new l(m.Sb(t.c), m.Sb(p.a))
					},
					token: l,
					providedIn: "root"
				}), l
			})()
		},
		phWj: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		q5RT: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		qH0I: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return g
			}));
			var t = u("8Y7J"),
				e = u("SVse"),
				r = u("uYey"),
				a = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"]))], null, null)
			}

			function s(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n tr\xedch n\u1ee3"]))], null, null)
			}

			function c(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"]))], null, null)
			}

			function o(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Amount"]))], null, null)
			}

			function b(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ghi c\xf3"])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Amount"])), (l()(), t.rb(7, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(8, null, ["", " VND"]))], null, (function(l, n) {
					l(n, 8, 0, n.component.data.tranResult.transaction.exchangeAmount)
				}))
			}

			function h(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 172, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["X\xc1C NH\u1eacN Y\xcaU C\u1ea6U CHUY\u1ec2N TI\u1ec0N NG\xc0Y T\u01af\u01a0NG LAI"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Payment Order Confirmation)"])), (l()(), t.rb(12, 0, null, null, 117, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 16, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y l\u1eadp l\u1ec7nh"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order date"])), (l()(), t.rb(20, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y hi\u1ec7u l\u1ef1c"])), (l()(), t.rb(25, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(26, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Effective Date"])), (l()(), t.rb(28, 0, null, null, 1, "td", [], null, null, null, null, null)), (l()(), t.Lb(29, null, ["", ""])), (l()(), t.rb(30, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(31, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(34, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(35, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(37, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(38, null, ["", ""])), (l()(), t.rb(39, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(40, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(43, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(44, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(46, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(47, null, ["", ""])), (l()(), t.rb(48, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(49, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(52, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(53, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Account"])), (l()(), t.rb(55, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(56, null, ["", ""])), (l()(), t.rb(57, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(58, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(61, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(62, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(64, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(65, null, ["", ""])), (l()(), t.rb(66, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(67, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\xe2n h\xe0ng h\u01b0\u1edfng"])), (l()(), t.rb(70, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(71, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Bank Name"])), (l()(), t.rb(73, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Vietcombank"])), (l()(), t.rb(75, 0, null, null, 12, "tr", [], null, null, null, null, null)), (l()(), t.rb(76, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, i)), t.qb(78, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, s)), t.qb(80, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(81, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, c)), t.qb(83, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, o)), t.qb(85, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(86, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(87, null, ["", " ", ""])), (l()(), t.gb(16777216, null, null, 1, null, b)), t.qb(89, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(90, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(91, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(92, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(94, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(95, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Fee type"])), (l()(), t.rb(97, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(98, null, [" ", ""])), (l()(), t.rb(99, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(100, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(101, null, ["", ""])), (l()(), t.rb(102, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(103, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(104, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(106, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(107, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Amount"])), (l()(), t.rb(109, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(111, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(113, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(114, null, ["", " VND "])), (l()(), t.rb(115, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(117, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(118, null, [" ", " VND "])), (l()(), t.rb(119, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(120, null, [" ", " VND"])), (l()(), t.rb(121, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(122, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(123, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung chuy\u1ec3n ti\u1ec1n"])), (l()(), t.rb(125, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(126, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Remark"])), (l()(), t.rb(128, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(129, null, ["", ""])), (l()(), t.rb(130, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(131, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(133, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(134, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(136, 0, null, null, 36, "div", [], null, null, null, null, null)), (l()(), t.rb(137, 0, null, null, 3, "p", [], null, null, null, null, null)), (l()(), t.rb(138, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": X\xe1c nh\u1eadn th\xf4ng tin chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a Vietcombank v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba"])), (l()(), t.rb(141, 0, null, null, 1, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed v\xe0 t\u1ef7 gi\xe1 quy \u0111\u1ed5i ch\u1ec9 mang t\xednh ch\u1ea5t tham kh\u1ea3o t\u1ea1i th\u1eddi \u0111i\u1ec3m l\u1eadp l\u1ec7nh v\xe0 s\u1ebd \u0111\u01b0\u1ee3c \xe1p d\u1ee5ng theo quy \u0111\u1ecbnh c\u1ee7a Vietcombank t\u1ea1i th\u1eddi \u0111i\u1ec3m h\u1ea1ch to\xe1n giao d\u1ecbch."])), (l()(), t.rb(143, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Please note that: This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(145, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["The above information of fee amount and exchange rate is for reference only. Fee amount and exchange rate to be applied to payment transaction will be announced and applied by the Bank at the time the payment is processed."])), (l()(), t.rb(147, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(149, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(151, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(154, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(156, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(159, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(161, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(163, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(165, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(167, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(169, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(171, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], (function(l, n) {
					var u = n.component;
					l(n, 78, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 80, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 83, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 85, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 89, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy)
				}), (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 29, 0, u.data.tranResult.transaction.specificDate), l(n, 38, 0, u.data.tranResult.transaction.tranId), l(n, 47, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 56, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 65, 0, u.data.tranResult.transaction.creditAccountName), l(n, 87, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 98, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 101, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 114, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 118, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 120, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 129, 0, u.data.tranResult.transaction.content)
				}))
			}

			function d(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, h, a)), t.qb(1, 114688, null, 0, r.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var g = t.nb("ng-component", r.a, d, {
				data: "data"
			}, {}, [])
		},
		rC5v: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("q5RT"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		sm2b: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		tRjT: function(l, n, u) {
			"use strict";
			var t;
			u.d(n, "a", (function() {
					return t
				})),
				function(l) {
					let n, u, t, e;
					! function(l) {
						l.TOPUP_WALLET = "0301", l.TOPUP_CARD = "0303", l.TOPUP_VETC = "0304", l.TOPUP_MERCHANT = "0308", l.INTERBANK_TRANSFER_VIA_ACCNO = "0542", l.INTERBANK_FURTURE_TRANSFER = "0560", l.INTERBANK_SCHEDULE_TRANSFER = "0561 ", l.INTERBANK_TRANSFER = "0542,0560,0561", l.INTERBANK_FAST_TRANSFER = "0551", l.INTERBANK_TRANSFER_VIA_CARD = "0543", l.INTERNAL_FURTURE_TRANSFER = "0552", l.INTERNAL_SCHEDULE_TRANSFER = "0553", l.TRANSER_VIA_ISSUE = "0557", l.TRANSER_IN_VCB = "0540,0541,0552,0553", l.BILLING_ONLINE = "0440", l.BILLING_ONLINE_PERIODIC = "0441", l.BILLING_OFFLINE = "0440", l.REG_AUTO_DEBIT = "0820", l.UNREG_AUTO_DEBIT = "0821", l.EDIT_AUTO_DEBIT = "0822", l.OPEN_SAVING_BOOK = "0800", l.CLOSE_SAVING_BOOK = "0810", l.DRAW_SAVING_BOOK = "0811", l.ADD_SAVING_BOOK = "0812", l.OPEN_AUTO_SAVING_BOOK = "0813", l.CLOSE_AUTO_SAVING_BOOK = "0814", l.PAY_TAX = "0306", l.FINACE_BILLING_ONLINE = "0307", l.FINACE_BILLING_OFFLINE = "0306", l.TRANFER_CHARITY = "0546", l.TOPUP_PHONE = "0305", l.BILLING_BHXH = "0905", l.SEAPORT_TAX = "0314,0315", l.TAX_DEBIT_ACC = " 0310,0311", l.REGISTRATION_TAX_DEBIT_ACC = " 0312,0313"
					}(n = l.BeneServiceCode || (l.BeneServiceCode = {})),
					function(l) {
						l.SYSTEM_TEMP_INTERUPT = "3004", l.SYSTEM_INTERUPT = "209", l.OTP_WRONG = "39", l.OTP_LIMIT_EXCESS = "48", l.OTP_EXPIRED = "07", l.SMARTOTP_WRONG = "6009", l.SMARTOTP_EXPIRED = "6008", l.TIME_OUT = "8", l.NOT_BALANCE = "13", l.NOT_DEBT_CHARGES = "059", l.NO_UPDATE_STATUS_TRANSACTION = "062", l.PASSWORD_WRONG = "019", l.PASSWORD_LIMIT_EXCESS = "109", l.TRANSACTION_EXPIRED = "028", l.TRANSACTION_EXPIRED_TIME = "029", l.ACCOUNTING_FAILED = "3014", l.SMART_OTP_EXPIRED = "AUTHO2FA_600"
					}(u = l.ApiResponseCode || (l.ApiResponseCode = {})),
					function(l) {
						l.LANGUAGE = "lang", l.USER_INFO = "currentUser", l.LOGIN_STATE = "logonStatus", l.BILL_SERVICES = "lstService", l.JWT_TOKEN = "ssid", l.SESSION_TIMEOUT = "ttl", l.LANGUAGE_CACHE_STORAGE_PREFIX = "vcb.app_lang_", l.ACCESS_KEY = "accessKey"
					}(t = l.StoreKey || (l.StoreKey = {})),
					function(l) {
						l.ChuyenTienTrongNgayHienTai = "ChuyenTienTrongNgayHienTai", l.ChuyenTienTrongTuongLai = "ChuyenTienTrongTuongLai", l.ChuyenTienTrongDinhKy = "ChuyenTienTrongDinhKy", l.ChuyenTienQuaNHNNNgayHienTai = "ChuyenTienQuaNHNNNgayHienTai", l.ChuyenTienQuaNHNNTuongLai = "ChuyenTienQuaNHNNTuongLai", l.ChuyenTienQuaNHNNDinhKy = "ChuyenTienQuaNHNNDinhKy", l.ChuyenTienNhanhQuaTaiKhoan = "ChuyenTienNhanhQuaTaiKhoan", l.ChuyenTienNhanhQuaThe = "ChuyenTienNhanhQuaThe", l.ChuyenTienBangCMND = "ChuyenTienBangCMND", l.ChuyenTienTuThien = "ChuyenTienTuThien", l.ThanhToanHoaDon = "ThanhToanHoaDon", l.MoTietKiem = "MoTietKiem", l.NopThemTienTietKiem = "NopThemTienTietKiem", l.RutMotPhanTietKiem = "RutMotPhanTietKiem", l.TatToanTietKiem = "TatToanTietKiem", l.DangKyTietKiemTuDong = "DangKyTietKiemTuDong", l.HuyTietKiemTuDong = "HuyTietKiemTuDong", l.DangKySoftOTPDocLap = "DangKySoftOTPDocLap", l.HuySoftOTPDocLap = "HuySoftOTPDocLap", l.KichHoatSMSChuDong = "KichHoatSMSChuDong", l.DangKyTaiKhoanNhanBienDong = "DangKyTaiKhoanNhanBienDong", l.HuyTaiKhoanNhanBienDong = "HuyTaiKhoanNhanBienDong", l.ThanhToanTheTinDung = "ThanhToanTheTinDung", l.MoKhoaThe = "MoKhoaThe", l.ThayDoiHanMucThe = "ThayDoiHanMucThe", l.ThayDoiTaiKhoanChiDinh = "ThayDoiTaiKhoanChiDinh", l.DangKyThanhToanTrenInternet = "DangKyThanhToanTrenInternet", l.HuyThanhToanTrenInternet = "HuyThanhToanTrenInternet", l.KhoaTheTamThoi = "KhoaTheTamThoi", l.DangKyEmailNhanCardOTP = "DangKyEmailNhanCardOTP", l.HuyEmailNhanCardOTP = "HuyEmailNhanCardOTP", l.NgungDichVuSMSBanking = "NgungDichVuSMSBanking", l.ThayDoiTaiKhoanSMSBanking = "ThayDoiTaiKhoanSMSBanking", l.DangKyViDienTu = "DangKyViDienTu", l.NgungViDienTu = "NgungViDienTu", l.ThayDoiSoTaiKhoanViDienTu = "ThayDoiSoTaiKhoanViDienTu", l.DangKyPhoneBanking = "DangKyPhoneBanking", l.CapLaiMatKhauPhoneBanking = "CapLaiMatKhauPhoneBanking", l.DangKyUyQuyenAutoDebit = "DangKyUyQuyenAutoDebit", l.HuyUyQuyenAutoDebit = "HuyUyQuyenAutoDebit", l.ThayDoiSoTaiKhoanAutoDebit = "ThayDoiSoTaiKhoanAutoDebit", l.LapYeuCauTraSoat = "LapYeuCauTraSoat", l.CaiDatHanMucChuyenTien = "CaiDatHanMucChuyenTien", l.CaiDatTaiKhoanThuPhi = "CaiDatTaiKhoanThuPhi", l.DoiMatKhau = "DoiMatKhau", l.NopThue = "NopThue", l.NopBaoHiemXaHoi = "NopBaoHiemXaHoi"
					}(e = l.ReceiptPrintScreen || (l.ReceiptPrintScreen = {}))
				}(t || (t = {}))
		},
		tjlA: function(l, n, u) {
			"use strict";
			var t = u("H7XF"),
				e = u("kVK+"),
				r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

			function a(l) {
				if (l > 2147483647) throw new RangeError('The value "' + l + '" is invalid for option "size"');
				var n = new Uint8Array(l);
				return Object.setPrototypeOf(n, i.prototype), n
			}

			function i(l, n, u) {
				if ("number" == typeof l) {
					if ("string" == typeof n) throw new TypeError('The "string" argument must be of type string. Received type number');
					return o(l)
				}
				return s(l, n, u)
			}

			function s(l, n, u) {
				if ("string" == typeof l) return function(l, n) {
					if ("string" == typeof n && "" !== n || (n = "utf8"), !i.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
					var u = 0 | g(l, n),
						t = a(u),
						e = t.write(l, n);
					return e !== u && (t = t.slice(0, e)), t
				}(l, n);
				if (ArrayBuffer.isView(l)) return b(l);
				if (null == l) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l);
				if (q(l, ArrayBuffer) || l && q(l.buffer, ArrayBuffer)) return h(l, n, u);
				if ("undefined" != typeof SharedArrayBuffer && (q(l, SharedArrayBuffer) || l && q(l.buffer, SharedArrayBuffer))) return h(l, n, u);
				if ("number" == typeof l) throw new TypeError('The "value" argument must not be of type number. Received type number');
				var t = l.valueOf && l.valueOf();
				if (null != t && t !== l) return i.from(t, n, u);
				var e = function(l) {
					if (i.isBuffer(l)) {
						var n = 0 | d(l.length),
							u = a(n);
						return 0 === u.length ? u : (l.copy(u, 0, 0, n), u)
					}
					return void 0 !== l.length ? "number" != typeof l.length || M(l.length) ? a(0) : b(l) : "Buffer" === l.type && Array.isArray(l.data) ? b(l.data) : void 0
				}(l);
				if (e) return e;
				if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof l[Symbol.toPrimitive]) return i.from(l[Symbol.toPrimitive]("string"), n, u);
				throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l)
			}

			function c(l) {
				if ("number" != typeof l) throw new TypeError('"size" argument must be of type number');
				if (l < 0) throw new RangeError('The value "' + l + '" is invalid for option "size"')
			}

			function o(l) {
				return c(l), a(l < 0 ? 0 : 0 | d(l))
			}

			function b(l) {
				for (var n = l.length < 0 ? 0 : 0 | d(l.length), u = a(n), t = 0; t < n; t += 1) u[t] = 255 & l[t];
				return u
			}

			function h(l, n, u) {
				if (n < 0 || l.byteLength < n) throw new RangeError('"offset" is outside of buffer bounds');
				if (l.byteLength < n + (u || 0)) throw new RangeError('"length" is outside of buffer bounds');
				var t;
				return t = void 0 === n && void 0 === u ? new Uint8Array(l) : void 0 === u ? new Uint8Array(l, n) : new Uint8Array(l, n, u), Object.setPrototypeOf(t, i.prototype), t
			}

			function d(l) {
				if (l >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647..toString(16) + " bytes");
				return 0 | l
			}

			function g(l, n) {
				if (i.isBuffer(l)) return l.length;
				if (ArrayBuffer.isView(l) || q(l, ArrayBuffer)) return l.byteLength;
				if ("string" != typeof l) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof l);
				var u = l.length,
					t = arguments.length > 2 && !0 === arguments[2];
				if (!t && 0 === u) return 0;
				for (var e = !1;;) switch (n) {
					case "ascii":
					case "latin1":
					case "binary":
						return u;
					case "utf8":
					case "utf-8":
						return B(l).length;
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return 2 * u;
					case "hex":
						return u >>> 1;
					case "base64":
						return K(l).length;
					default:
						if (e) return t ? -1 : B(l).length;
						n = ("" + n).toLowerCase(), e = !0
				}
			}

			function m(l, n, u) {
				var t = !1;
				if ((void 0 === n || n < 0) && (n = 0), n > this.length) return "";
				if ((void 0 === u || u > this.length) && (u = this.length), u <= 0) return "";
				if ((u >>>= 0) <= (n >>>= 0)) return "";
				for (l || (l = "utf8");;) switch (l) {
					case "hex":
						return D(this, n, u);
					case "utf8":
					case "utf-8":
						return T(this, n, u);
					case "ascii":
						return S(this, n, u);
					case "latin1":
					case "binary":
						return I(this, n, u);
					case "base64":
						return C(this, n, u);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return U(this, n, u);
					default:
						if (t) throw new TypeError("Unknown encoding: " + l);
						l = (l + "").toLowerCase(), t = !0
				}
			}

			function p(l, n, u) {
				var t = l[n];
				l[n] = l[u], l[u] = t
			}

			function f(l, n, u, t, e) {
				if (0 === l.length) return -1;
				if ("string" == typeof u ? (t = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), M(u = +u) && (u = e ? 0 : l.length - 1), u < 0 && (u = l.length + u), u >= l.length) {
					if (e) return -1;
					u = l.length - 1
				} else if (u < 0) {
					if (!e) return -1;
					u = 0
				}
				if ("string" == typeof n && (n = i.from(n, t)), i.isBuffer(n)) return 0 === n.length ? -1 : v(l, n, u, t, e);
				if ("number" == typeof n) return n &= 255, "function" == typeof Uint8Array.prototype.indexOf ? e ? Uint8Array.prototype.indexOf.call(l, n, u) : Uint8Array.prototype.lastIndexOf.call(l, n, u) : v(l, [n], u, t, e);
				throw new TypeError("val must be string, number or Buffer")
			}

			function v(l, n, u, t, e) {
				var r, a = 1,
					i = l.length,
					s = n.length;
				if (void 0 !== t && ("ucs2" === (t = String(t).toLowerCase()) || "ucs-2" === t || "utf16le" === t || "utf-16le" === t)) {
					if (l.length < 2 || n.length < 2) return -1;
					a = 2, i /= 2, s /= 2, u /= 2
				}

				function c(l, n) {
					return 1 === a ? l[n] : l.readUInt16BE(n * a)
				}
				if (e) {
					var o = -1;
					for (r = u; r < i; r++)
						if (c(l, r) === c(n, -1 === o ? 0 : r - o)) {
							if (-1 === o && (o = r), r - o + 1 === s) return o * a
						} else -1 !== o && (r -= r - o), o = -1
				} else
					for (u + s > i && (u = i - s), r = u; r >= 0; r--) {
						for (var b = !0, h = 0; h < s; h++)
							if (c(l, r + h) !== c(n, h)) {
								b = !1;
								break
							} if (b) return r
					}
				return -1
			}

			function y(l, n, u, t) {
				u = Number(u) || 0;
				var e = l.length - u;
				t ? (t = Number(t)) > e && (t = e) : t = e;
				var r = n.length;
				t > r / 2 && (t = r / 2);
				for (var a = 0; a < t; ++a) {
					var i = parseInt(n.substr(2 * a, 2), 16);
					if (M(i)) return a;
					l[u + a] = i
				}
				return a
			}

			function k(l, n, u, t) {
				return j(B(n, l.length - u), l, u, t)
			}

			function L(l, n, u, t) {
				return j(function(l) {
					for (var n = [], u = 0; u < l.length; ++u) n.push(255 & l.charCodeAt(u));
					return n
				}(n), l, u, t)
			}

			function N(l, n, u, t) {
				return L(l, n, u, t)
			}

			function _(l, n, u, t) {
				return j(K(n), l, u, t)
			}

			function w(l, n, u, t) {
				return j(function(l, n) {
					for (var u, t, e = [], r = 0; r < l.length && !((n -= 2) < 0); ++r) t = (u = l.charCodeAt(r)) >> 8, e.push(u % 256), e.push(t);
					return e
				}(n, l.length - u), l, u, t)
			}

			function C(l, n, u) {
				return t.fromByteArray(0 === n && u === l.length ? l : l.slice(n, u))
			}

			function T(l, n, u) {
				u = Math.min(l.length, u);
				for (var t = [], e = n; e < u;) {
					var r, a, i, s, c = l[e],
						o = null,
						b = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
					if (e + b <= u) switch (b) {
						case 1:
							c < 128 && (o = c);
							break;
						case 2:
							128 == (192 & (r = l[e + 1])) && (s = (31 & c) << 6 | 63 & r) > 127 && (o = s);
							break;
						case 3:
							a = l[e + 2], 128 == (192 & (r = l[e + 1])) && 128 == (192 & a) && (s = (15 & c) << 12 | (63 & r) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (o = s);
							break;
						case 4:
							a = l[e + 2], i = l[e + 3], 128 == (192 & (r = l[e + 1])) && 128 == (192 & a) && 128 == (192 & i) && (s = (15 & c) << 18 | (63 & r) << 12 | (63 & a) << 6 | 63 & i) > 65535 && s < 1114112 && (o = s)
					}
					null === o ? (o = 65533, b = 1) : o > 65535 && (t.push((o -= 65536) >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), t.push(o), e += b
				}
				return function(l) {
					var n = l.length;
					if (n <= 4096) return String.fromCharCode.apply(String, l);
					for (var u = "", t = 0; t < n;) u += String.fromCharCode.apply(String, l.slice(t, t += 4096));
					return u
				}(t)
			}

			function S(l, n, u) {
				var t = "";
				u = Math.min(l.length, u);
				for (var e = n; e < u; ++e) t += String.fromCharCode(127 & l[e]);
				return t
			}

			function I(l, n, u) {
				var t = "";
				u = Math.min(l.length, u);
				for (var e = n; e < u; ++e) t += String.fromCharCode(l[e]);
				return t
			}

			function D(l, n, u) {
				var t = l.length;
				(!n || n < 0) && (n = 0), (!u || u < 0 || u > t) && (u = t);
				for (var e = "", r = n; r < u; ++r) e += V[l[r]];
				return e
			}

			function U(l, n, u) {
				for (var t = l.slice(n, u), e = "", r = 0; r < t.length; r += 2) e += String.fromCharCode(t[r] + 256 * t[r + 1]);
				return e
			}

			function A(l, n, u) {
				if (l % 1 != 0 || l < 0) throw new RangeError("offset is not uint");
				if (l + n > u) throw new RangeError("Trying to access beyond buffer length")
			}

			function R(l, n, u, t, e, r) {
				if (!i.isBuffer(l)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (n > e || n < r) throw new RangeError('"value" argument is out of bounds');
				if (u + t > l.length) throw new RangeError("Index out of range")
			}

			function E(l, n, u, t, e, r) {
				if (u + t > l.length) throw new RangeError("Index out of range");
				if (u < 0) throw new RangeError("Index out of range")
			}

			function P(l, n, u, t, r) {
				return n = +n, u >>>= 0, r || E(l, 0, u, 4), e.write(l, n, u, t, 23, 4), u + 4
			}

			function x(l, n, u, t, r) {
				return n = +n, u >>>= 0, r || E(l, 0, u, 8), e.write(l, n, u, t, 52, 8), u + 8
			}
			n.Buffer = i, n.SlowBuffer = function(l) {
				return +l != l && (l = 0), i.alloc(+l)
			}, n.INSPECT_MAX_BYTES = 50, n.kMaxLength = 2147483647, (i.TYPED_ARRAY_SUPPORT = function() {
				try {
					var l = new Uint8Array(1),
						n = {
							foo: function() {
								return 42
							}
						};
					return Object.setPrototypeOf(n, Uint8Array.prototype), Object.setPrototypeOf(l, n), 42 === l.foo()
				} catch (u) {
					return !1
				}
			}()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(i.prototype, "parent", {
				enumerable: !0,
				get: function() {
					if (i.isBuffer(this)) return this.buffer
				}
			}), Object.defineProperty(i.prototype, "offset", {
				enumerable: !0,
				get: function() {
					if (i.isBuffer(this)) return this.byteOffset
				}
			}), i.poolSize = 8192, i.from = function(l, n, u) {
				return s(l, n, u)
			}, Object.setPrototypeOf(i.prototype, Uint8Array.prototype), Object.setPrototypeOf(i, Uint8Array), i.alloc = function(l, n, u) {
				return function(l, n, u) {
					return c(l), l <= 0 ? a(l) : void 0 !== n ? "string" == typeof u ? a(l).fill(n, u) : a(l).fill(n) : a(l)
				}(l, n, u)
			}, i.allocUnsafe = function(l) {
				return o(l)
			}, i.allocUnsafeSlow = function(l) {
				return o(l)
			}, i.isBuffer = function(l) {
				return null != l && !0 === l._isBuffer && l !== i.prototype
			}, i.compare = function(l, n) {
				if (q(l, Uint8Array) && (l = i.from(l, l.offset, l.byteLength)), q(n, Uint8Array) && (n = i.from(n, n.offset, n.byteLength)), !i.isBuffer(l) || !i.isBuffer(n)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
				if (l === n) return 0;
				for (var u = l.length, t = n.length, e = 0, r = Math.min(u, t); e < r; ++e)
					if (l[e] !== n[e]) {
						u = l[e], t = n[e];
						break
					} return u < t ? -1 : t < u ? 1 : 0
			}, i.isEncoding = function(l) {
				switch (String(l).toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "latin1":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return !0;
					default:
						return !1
				}
			}, i.concat = function(l, n) {
				if (!Array.isArray(l)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === l.length) return i.alloc(0);
				var u;
				if (void 0 === n)
					for (n = 0, u = 0; u < l.length; ++u) n += l[u].length;
				var t = i.allocUnsafe(n),
					e = 0;
				for (u = 0; u < l.length; ++u) {
					var r = l[u];
					if (q(r, Uint8Array) && (r = i.from(r)), !i.isBuffer(r)) throw new TypeError('"list" argument must be an Array of Buffers');
					r.copy(t, e), e += r.length
				}
				return t
			}, i.byteLength = g, i.prototype._isBuffer = !0, i.prototype.swap16 = function() {
				var l = this.length;
				if (l % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var n = 0; n < l; n += 2) p(this, n, n + 1);
				return this
			}, i.prototype.swap32 = function() {
				var l = this.length;
				if (l % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var n = 0; n < l; n += 4) p(this, n, n + 3), p(this, n + 1, n + 2);
				return this
			}, i.prototype.swap64 = function() {
				var l = this.length;
				if (l % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var n = 0; n < l; n += 8) p(this, n, n + 7), p(this, n + 1, n + 6), p(this, n + 2, n + 5), p(this, n + 3, n + 4);
				return this
			}, i.prototype.toLocaleString = i.prototype.toString = function() {
				var l = this.length;
				return 0 === l ? "" : 0 === arguments.length ? T(this, 0, l) : m.apply(this, arguments)
			}, i.prototype.equals = function(l) {
				if (!i.isBuffer(l)) throw new TypeError("Argument must be a Buffer");
				return this === l || 0 === i.compare(this, l)
			}, i.prototype.inspect = function() {
				var l = "",
					u = n.INSPECT_MAX_BYTES;
				return l = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (l += " ... "), "<Buffer " + l + ">"
			}, r && (i.prototype[r] = i.prototype.inspect), i.prototype.compare = function(l, n, u, t, e) {
				if (q(l, Uint8Array) && (l = i.from(l, l.offset, l.byteLength)), !i.isBuffer(l)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l);
				if (void 0 === n && (n = 0), void 0 === u && (u = l ? l.length : 0), void 0 === t && (t = 0), void 0 === e && (e = this.length), n < 0 || u > l.length || t < 0 || e > this.length) throw new RangeError("out of range index");
				if (t >= e && n >= u) return 0;
				if (t >= e) return -1;
				if (n >= u) return 1;
				if (this === l) return 0;
				for (var r = (e >>>= 0) - (t >>>= 0), a = (u >>>= 0) - (n >>>= 0), s = Math.min(r, a), c = this.slice(t, e), o = l.slice(n, u), b = 0; b < s; ++b)
					if (c[b] !== o[b]) {
						r = c[b], a = o[b];
						break
					} return r < a ? -1 : a < r ? 1 : 0
			}, i.prototype.includes = function(l, n, u) {
				return -1 !== this.indexOf(l, n, u)
			}, i.prototype.indexOf = function(l, n, u) {
				return f(this, l, n, u, !0)
			}, i.prototype.lastIndexOf = function(l, n, u) {
				return f(this, l, n, u, !1)
			}, i.prototype.write = function(l, n, u, t) {
				if (void 0 === n) t = "utf8", u = this.length, n = 0;
				else if (void 0 === u && "string" == typeof n) t = n, u = this.length, n = 0;
				else {
					if (!isFinite(n)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					n >>>= 0, isFinite(u) ? (u >>>= 0, void 0 === t && (t = "utf8")) : (t = u, u = void 0)
				}
				var e = this.length - n;
				if ((void 0 === u || u > e) && (u = e), l.length > 0 && (u < 0 || n < 0) || n > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				t || (t = "utf8");
				for (var r = !1;;) switch (t) {
					case "hex":
						return y(this, l, n, u);
					case "utf8":
					case "utf-8":
						return k(this, l, n, u);
					case "ascii":
						return L(this, l, n, u);
					case "latin1":
					case "binary":
						return N(this, l, n, u);
					case "base64":
						return _(this, l, n, u);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return w(this, l, n, u);
					default:
						if (r) throw new TypeError("Unknown encoding: " + t);
						t = ("" + t).toLowerCase(), r = !0
				}
			}, i.prototype.toJSON = function() {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			}, i.prototype.slice = function(l, n) {
				var u = this.length;
				(l = ~~l) < 0 ? (l += u) < 0 && (l = 0) : l > u && (l = u), (n = void 0 === n ? u : ~~n) < 0 ? (n += u) < 0 && (n = 0) : n > u && (n = u), n < l && (n = l);
				var t = this.subarray(l, n);
				return Object.setPrototypeOf(t, i.prototype), t
			}, i.prototype.readUIntLE = function(l, n, u) {
				l >>>= 0, n >>>= 0, u || A(l, n, this.length);
				for (var t = this[l], e = 1, r = 0; ++r < n && (e *= 256);) t += this[l + r] * e;
				return t
			}, i.prototype.readUIntBE = function(l, n, u) {
				l >>>= 0, n >>>= 0, u || A(l, n, this.length);
				for (var t = this[l + --n], e = 1; n > 0 && (e *= 256);) t += this[l + --n] * e;
				return t
			}, i.prototype.readUInt8 = function(l, n) {
				return l >>>= 0, n || A(l, 1, this.length), this[l]
			}, i.prototype.readUInt16LE = function(l, n) {
				return l >>>= 0, n || A(l, 2, this.length), this[l] | this[l + 1] << 8
			}, i.prototype.readUInt16BE = function(l, n) {
				return l >>>= 0, n || A(l, 2, this.length), this[l] << 8 | this[l + 1]
			}, i.prototype.readUInt32LE = function(l, n) {
				return l >>>= 0, n || A(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + 16777216 * this[l + 3]
			}, i.prototype.readUInt32BE = function(l, n) {
				return l >>>= 0, n || A(l, 4, this.length), 16777216 * this[l] + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3])
			}, i.prototype.readIntLE = function(l, n, u) {
				l >>>= 0, n >>>= 0, u || A(l, n, this.length);
				for (var t = this[l], e = 1, r = 0; ++r < n && (e *= 256);) t += this[l + r] * e;
				return t >= (e *= 128) && (t -= Math.pow(2, 8 * n)), t
			}, i.prototype.readIntBE = function(l, n, u) {
				l >>>= 0, n >>>= 0, u || A(l, n, this.length);
				for (var t = n, e = 1, r = this[l + --t]; t > 0 && (e *= 256);) r += this[l + --t] * e;
				return r >= (e *= 128) && (r -= Math.pow(2, 8 * n)), r
			}, i.prototype.readInt8 = function(l, n) {
				return l >>>= 0, n || A(l, 1, this.length), 128 & this[l] ? -1 * (255 - this[l] + 1) : this[l]
			}, i.prototype.readInt16LE = function(l, n) {
				l >>>= 0, n || A(l, 2, this.length);
				var u = this[l] | this[l + 1] << 8;
				return 32768 & u ? 4294901760 | u : u
			}, i.prototype.readInt16BE = function(l, n) {
				l >>>= 0, n || A(l, 2, this.length);
				var u = this[l + 1] | this[l] << 8;
				return 32768 & u ? 4294901760 | u : u
			}, i.prototype.readInt32LE = function(l, n) {
				return l >>>= 0, n || A(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24
			}, i.prototype.readInt32BE = function(l, n) {
				return l >>>= 0, n || A(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]
			}, i.prototype.readFloatLE = function(l, n) {
				return l >>>= 0, n || A(l, 4, this.length), e.read(this, l, !0, 23, 4)
			}, i.prototype.readFloatBE = function(l, n) {
				return l >>>= 0, n || A(l, 4, this.length), e.read(this, l, !1, 23, 4)
			}, i.prototype.readDoubleLE = function(l, n) {
				return l >>>= 0, n || A(l, 8, this.length), e.read(this, l, !0, 52, 8)
			}, i.prototype.readDoubleBE = function(l, n) {
				return l >>>= 0, n || A(l, 8, this.length), e.read(this, l, !1, 52, 8)
			}, i.prototype.writeUIntLE = function(l, n, u, t) {
				l = +l, n >>>= 0, u >>>= 0, t || R(this, l, n, u, Math.pow(2, 8 * u) - 1, 0);
				var e = 1,
					r = 0;
				for (this[n] = 255 & l; ++r < u && (e *= 256);) this[n + r] = l / e & 255;
				return n + u
			}, i.prototype.writeUIntBE = function(l, n, u, t) {
				l = +l, n >>>= 0, u >>>= 0, t || R(this, l, n, u, Math.pow(2, 8 * u) - 1, 0);
				var e = u - 1,
					r = 1;
				for (this[n + e] = 255 & l; --e >= 0 && (r *= 256);) this[n + e] = l / r & 255;
				return n + u
			}, i.prototype.writeUInt8 = function(l, n, u) {
				return l = +l, n >>>= 0, u || R(this, l, n, 1, 255, 0), this[n] = 255 & l, n + 1
			}, i.prototype.writeUInt16LE = function(l, n, u) {
				return l = +l, n >>>= 0, u || R(this, l, n, 2, 65535, 0), this[n] = 255 & l, this[n + 1] = l >>> 8, n + 2
			}, i.prototype.writeUInt16BE = function(l, n, u) {
				return l = +l, n >>>= 0, u || R(this, l, n, 2, 65535, 0), this[n] = l >>> 8, this[n + 1] = 255 & l, n + 2
			}, i.prototype.writeUInt32LE = function(l, n, u) {
				return l = +l, n >>>= 0, u || R(this, l, n, 4, 4294967295, 0), this[n + 3] = l >>> 24, this[n + 2] = l >>> 16, this[n + 1] = l >>> 8, this[n] = 255 & l, n + 4
			}, i.prototype.writeUInt32BE = function(l, n, u) {
				return l = +l, n >>>= 0, u || R(this, l, n, 4, 4294967295, 0), this[n] = l >>> 24, this[n + 1] = l >>> 16, this[n + 2] = l >>> 8, this[n + 3] = 255 & l, n + 4
			}, i.prototype.writeIntLE = function(l, n, u, t) {
				if (l = +l, n >>>= 0, !t) {
					var e = Math.pow(2, 8 * u - 1);
					R(this, l, n, u, e - 1, -e)
				}
				var r = 0,
					a = 1,
					i = 0;
				for (this[n] = 255 & l; ++r < u && (a *= 256);) l < 0 && 0 === i && 0 !== this[n + r - 1] && (i = 1), this[n + r] = (l / a >> 0) - i & 255;
				return n + u
			}, i.prototype.writeIntBE = function(l, n, u, t) {
				if (l = +l, n >>>= 0, !t) {
					var e = Math.pow(2, 8 * u - 1);
					R(this, l, n, u, e - 1, -e)
				}
				var r = u - 1,
					a = 1,
					i = 0;
				for (this[n + r] = 255 & l; --r >= 0 && (a *= 256);) l < 0 && 0 === i && 0 !== this[n + r + 1] && (i = 1), this[n + r] = (l / a >> 0) - i & 255;
				return n + u
			}, i.prototype.writeInt8 = function(l, n, u) {
				return l = +l, n >>>= 0, u || R(this, l, n, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[n] = 255 & l, n + 1
			}, i.prototype.writeInt16LE = function(l, n, u) {
				return l = +l, n >>>= 0, u || R(this, l, n, 2, 32767, -32768), this[n] = 255 & l, this[n + 1] = l >>> 8, n + 2
			}, i.prototype.writeInt16BE = function(l, n, u) {
				return l = +l, n >>>= 0, u || R(this, l, n, 2, 32767, -32768), this[n] = l >>> 8, this[n + 1] = 255 & l, n + 2
			}, i.prototype.writeInt32LE = function(l, n, u) {
				return l = +l, n >>>= 0, u || R(this, l, n, 4, 2147483647, -2147483648), this[n] = 255 & l, this[n + 1] = l >>> 8, this[n + 2] = l >>> 16, this[n + 3] = l >>> 24, n + 4
			}, i.prototype.writeInt32BE = function(l, n, u) {
				return l = +l, n >>>= 0, u || R(this, l, n, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[n] = l >>> 24, this[n + 1] = l >>> 16, this[n + 2] = l >>> 8, this[n + 3] = 255 & l, n + 4
			}, i.prototype.writeFloatLE = function(l, n, u) {
				return P(this, l, n, !0, u)
			}, i.prototype.writeFloatBE = function(l, n, u) {
				return P(this, l, n, !1, u)
			}, i.prototype.writeDoubleLE = function(l, n, u) {
				return x(this, l, n, !0, u)
			}, i.prototype.writeDoubleBE = function(l, n, u) {
				return x(this, l, n, !1, u)
			}, i.prototype.copy = function(l, n, u, t) {
				if (!i.isBuffer(l)) throw new TypeError("argument should be a Buffer");
				if (u || (u = 0), t || 0 === t || (t = this.length), n >= l.length && (n = l.length), n || (n = 0), t > 0 && t < u && (t = u), t === u) return 0;
				if (0 === l.length || 0 === this.length) return 0;
				if (n < 0) throw new RangeError("targetStart out of bounds");
				if (u < 0 || u >= this.length) throw new RangeError("Index out of range");
				if (t < 0) throw new RangeError("sourceEnd out of bounds");
				t > this.length && (t = this.length), l.length - n < t - u && (t = l.length - n + u);
				var e = t - u;
				if (this === l && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(n, u, t);
				else if (this === l && u < n && n < t)
					for (var r = e - 1; r >= 0; --r) l[r + n] = this[r + u];
				else Uint8Array.prototype.set.call(l, this.subarray(u, t), n);
				return e
			}, i.prototype.fill = function(l, n, u, t) {
				if ("string" == typeof l) {
					if ("string" == typeof n ? (t = n, n = 0, u = this.length) : "string" == typeof u && (t = u, u = this.length), void 0 !== t && "string" != typeof t) throw new TypeError("encoding must be a string");
					if ("string" == typeof t && !i.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
					if (1 === l.length) {
						var e = l.charCodeAt(0);
						("utf8" === t && e < 128 || "latin1" === t) && (l = e)
					}
				} else "number" == typeof l ? l &= 255 : "boolean" == typeof l && (l = Number(l));
				if (n < 0 || this.length < n || this.length < u) throw new RangeError("Out of range index");
				if (u <= n) return this;
				var r;
				if (n >>>= 0, u = void 0 === u ? this.length : u >>> 0, l || (l = 0), "number" == typeof l)
					for (r = n; r < u; ++r) this[r] = l;
				else {
					var a = i.isBuffer(l) ? l : i.from(l, t),
						s = a.length;
					if (0 === s) throw new TypeError('The value "' + l + '" is invalid for argument "value"');
					for (r = 0; r < u - n; ++r) this[r + n] = a[r % s]
				}
				return this
			};
			var O = /[^+/0-9A-Za-z-_]/g;

			function B(l, n) {
				var u;
				n = n || 1 / 0;
				for (var t = l.length, e = null, r = [], a = 0; a < t; ++a) {
					if ((u = l.charCodeAt(a)) > 55295 && u < 57344) {
						if (!e) {
							if (u > 56319) {
								(n -= 3) > -1 && r.push(239, 191, 189);
								continue
							}
							if (a + 1 === t) {
								(n -= 3) > -1 && r.push(239, 191, 189);
								continue
							}
							e = u;
							continue
						}
						if (u < 56320) {
							(n -= 3) > -1 && r.push(239, 191, 189), e = u;
							continue
						}
						u = 65536 + (e - 55296 << 10 | u - 56320)
					} else e && (n -= 3) > -1 && r.push(239, 191, 189);
					if (e = null, u < 128) {
						if ((n -= 1) < 0) break;
						r.push(u)
					} else if (u < 2048) {
						if ((n -= 2) < 0) break;
						r.push(u >> 6 | 192, 63 & u | 128)
					} else if (u < 65536) {
						if ((n -= 3) < 0) break;
						r.push(u >> 12 | 224, u >> 6 & 63 | 128, 63 & u | 128)
					} else {
						if (!(u < 1114112)) throw new Error("Invalid code point");
						if ((n -= 4) < 0) break;
						r.push(u >> 18 | 240, u >> 12 & 63 | 128, u >> 6 & 63 | 128, 63 & u | 128)
					}
				}
				return r
			}

			function K(l) {
				return t.toByteArray(function(l) {
					if ((l = (l = l.split("=")[0]).trim().replace(O, "")).length < 2) return "";
					for (; l.length % 4 != 0;) l += "=";
					return l
				}(l))
			}

			function j(l, n, u, t) {
				for (var e = 0; e < t && !(e + u >= n.length || e >= l.length); ++e) n[e + u] = l[e];
				return e
			}

			function q(l, n) {
				return l instanceof n || null != l && null != l.constructor && null != l.constructor.name && l.constructor.name === n.name
			}

			function M(l) {
				return l != l
			}
			var V = function() {
				for (var l = new Array(256), n = 0; n < 16; ++n)
					for (var u = 16 * n, t = 0; t < 16; ++t) l[u + t] = "0123456789abcdef" [n] + "0123456789abcdef" [t];
				return l
			}()
		},
		tkpy: function(l, n, u) {
			"use strict";
			var t = u("PSoG");
			u.d(n, "a", (function() {
				return t.a
			}))
		},
		tr4J: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return r
			}));
			var t = u("2Vo4"),
				e = u("8Y7J");
			let r = (() => {
				class l {
					constructor() {
						this.beneSource = new t.a([]), this.benes = this.beneSource.asObservable(), this.selectedBeneSource = new t.a({}), this.selectedBene = this.selectedBeneSource.asObservable()
					}
					setBenes(l) {
						this.beneSource.next(l)
					}
					setSelectedBene(l) {
						this.selectedBeneSource.next(l)
					}
					getSelectedBene() {
						return this.selectedBene
					}
				}
				return l.ngInjectableDef = e.Rb({
					factory: function() {
						return new l
					},
					token: l,
					providedIn: "root"
				}), l
			})()
		},
		uBqB: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		uGTV: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		uQNk: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		uYey: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		ub6S: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		uhOr: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		vIQc: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return g
			}));
			var t = u("8Y7J"),
				e = u("SVse"),
				r = u("uQNk"),
				a = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"]))], null, null)
			}

			function s(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n tr\xedch n\u1ee3"]))], null, null)
			}

			function c(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"]))], null, null)
			}

			function o(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Amount"]))], null, null)
			}

			function b(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ghi c\xf3"])), (l()(), t.rb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Amount"])), (l()(), t.rb(7, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(8, null, ["", " VND"]))], null, (function(l, n) {
					l(n, 8, 0, n.component.data.tranResult.transaction.exchangeAmount)
				}))
			}

			function h(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 160, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["BI\xcaN LAI CHUY\u1ec2N TI\u1ec0N QUA TH\u1eba"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Payment Receipt)"])), (l()(), t.rb(12, 0, null, null, 109, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y, gi\u1edd giao d\u1ecbch"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Trans. Date, Time"])), (l()(), t.rb(20, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(29, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(30, null, ["", ""])), (l()(), t.rb(31, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(38, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(39, null, ["", ""])), (l()(), t.rb(40, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 th\u1ebb chuy\u1ec3n \u0111i"])), (l()(), t.rb(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Source Card Number "])), (l()(), t.rb(47, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(48, null, ["", ""])), (l()(), t.rb(49, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 th\u1ebb chuy\u1ec3n \u0111\u1ebfn"])), (l()(), t.rb(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Destination Card Number "])), (l()(), t.rb(56, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), (l()(), t.rb(58, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(65, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(66, null, ["", ""])), (l()(), t.rb(67, 0, null, null, 12, "tr", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, i)), t.qb(70, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, s)), t.qb(72, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(73, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, c)), t.qb(75, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, o)), t.qb(77, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(78, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(79, null, ["", " ", ""])), (l()(), t.gb(16777216, null, null, 1, null, b)), t.qb(81, 16384, null, 0, e.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(82, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(83, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(84, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(86, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(87, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Code "])), (l()(), t.rb(89, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(90, null, [" ", ""])), (l()(), t.rb(91, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(92, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(93, null, ["", ""])), (l()(), t.rb(94, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(95, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(96, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(98, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(99, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Fee Amount"])), (l()(), t.rb(101, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(103, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(105, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(106, null, ["", " VND "])), (l()(), t.rb(107, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(109, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(110, null, [" ", " VND "])), (l()(), t.rb(111, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(112, null, [" ", " VND"])), (l()(), t.rb(113, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(114, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(115, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung chuy\u1ec3n ti\u1ec1n"])), (l()(), t.rb(117, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(118, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Details of Payment "])), (l()(), t.rb(120, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(121, null, ["", ""])), (l()(), t.rb(122, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(123, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(125, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(126, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(128, 0, null, null, 32, "div", [], null, null, null, null, null)), (l()(), t.rb(129, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": Bi\xean lai chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a NHTMCP Ngo\u1ea1i Th\u01b0\u01a1ng Vi\u1ec7t Nam v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba."])), (l()(), t.rb(132, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(133, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(135, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(137, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(139, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(142, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(144, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(147, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.rb(149, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(151, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.rb(153, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(155, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(157, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(159, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], (function(l, n) {
					var u = n.component;
					l(n, 70, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 72, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 75, 0, "VND" === u.data.tranResult.transaction.debitAccountCcy), l(n, 77, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy), l(n, 81, 0, "VND" !== u.data.tranResult.transaction.debitAccountCcy)
				}), (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 30, 0, u.data.tranResult.transaction.tranId), l(n, 39, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 48, 0, u.data.tranResult.transaction.debitCardNo), l(n, 57, 0, u.data.tranResult.transaction.creditCardNo), l(n, 66, 0, u.data.tranResult.transaction.creditAccountName), l(n, 79, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 90, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 93, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 106, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 110, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 112, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 121, 0, u.data.tranResult.transaction.content)
				}))
			}

			function d(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, h, a)), t.qb(1, 114688, null, 0, r.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var g = t.nb("ng-component", r.a, d, {
				data: "data"
			}, {}, [])
		},
		vQc9: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("63Kk"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		vfFc: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		xB5f: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("1HeJ"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 156, "div", [
					["class", "print-area"],
					["id", "print-area"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 10, "div", [
					["class", "header-area"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 0, "img", [
					["class", "logo"],
					["src", "./assets/images/logo.jpg"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 4, "div", [
					["class", "contact-area"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(6, 0, null, null, 1, "div", [
					["class", "color-green b"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Hotline: 1900 54 54 13"])), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "titlepage"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["BI\xcaN LAI THANH TO\xc1N"])), (l()(), t.rb(10, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["(Payment Receipt)"])), (l()(), t.rb(12, 0, null, null, 103, "table", [
					["class", "table-print"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 5, "td", [
					["width", "200"]
				], null, null, null, null, null)), (l()(), t.rb(15, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Ng\xe0y, gi\u1edd giao d\u1ecbch"])), (l()(), t.rb(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Trans. Date, Time"])), (l()(), t.rb(20, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(21, null, ["", ""])), (l()(), t.rb(22, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 l\u1ec7nh giao d\u1ecbch"])), (l()(), t.rb(26, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(27, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Order Number"])), (l()(), t.rb(29, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(30, null, ["", ""])), (l()(), t.rb(31, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(32, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n ngu\u1ed3n"])), (l()(), t.rb(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(36, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Debit Account"])), (l()(), t.rb(38, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(39, null, ["", ""])), (l()(), t.rb(40, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(41, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(42, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xe0i kho\u1ea3n h\u01b0\u1edfng"])), (l()(), t.rb(44, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(45, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Credit Account"])), (l()(), t.rb(47, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(48, null, ["", ""])), (l()(), t.rb(49, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(50, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(51, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["T\xean ng\u01b0\u1eddi h\u01b0\u1edfng"])), (l()(), t.rb(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(54, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Beneficiary Name"])), (l()(), t.rb(56, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(57, null, ["", ""])), (l()(), t.rb(58, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(59, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(60, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\xe3 h\xf3a \u0111\u01a1n/M\xe3 kh\xe1ch h\xe0ng"])), (l()(), t.rb(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(63, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Bill code/Customer code"])), (l()(), t.rb(65, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(66, null, ["", ""])), (l()(), t.rb(67, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(68, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(69, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n"])), (l()(), t.rb(71, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(72, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Amount"])), (l()(), t.rb(74, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(75, null, ["", " ", ""])), (l()(), t.rb(76, 0, null, null, 30, "tr", [], null, null, null, null, null)), (l()(), t.rb(77, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(78, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Lo\u1ea1i ph\xed"])), (l()(), t.rb(80, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(81, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Code "])), (l()(), t.rb(83, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.Lb(84, null, [" ", ""])), (l()(), t.rb(85, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(86, 0, null, null, 2, "i", [], null, null, null, null, null)), (l()(), t.Lb(87, null, ["", ""])), (l()(), t.rb(88, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(89, 0, null, null, 9, "td", [], null, null, null, null, null)), (l()(), t.rb(90, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["S\u1ed1 ti\u1ec1n ph\xed"])), (l()(), t.rb(92, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(93, 0, null, null, 5, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Charge Amount"])), (l()(), t.rb(95, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Net income"])), (l()(), t.rb(97, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["VAT"])), (l()(), t.rb(99, 0, null, null, 7, "td", [], null, null, null, null, null)), (l()(), t.Lb(100, null, ["", " VND "])), (l()(), t.rb(101, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\xa0"])), (l()(), t.rb(103, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(104, null, [" ", " VND "])), (l()(), t.rb(105, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.Lb(106, null, [" ", " VND"])), (l()(), t.rb(107, 0, null, null, 8, "tr", [], null, null, null, null, null)), (l()(), t.rb(108, 0, null, null, 5, "td", [], null, null, null, null, null)), (l()(), t.rb(109, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["N\u1ed9i dung thanh to\xe1n"])), (l()(), t.rb(111, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(112, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Details of Payment "])), (l()(), t.rb(114, 0, null, null, 1, "td", [
					["colspan", "3"]
				], null, null, null, null, null)), (l()(), t.Lb(115, null, ["", ""])), (l()(), t.rb(116, 0, null, null, 5, "div", [
					["class", "text-center mb-15 mt-15"]
				], null, null, null, null, null)), (l()(), t.rb(117, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["C\xe1m \u01a1n Qu\xfd kh\xe1ch \u0111\xe3 s\u1eed d\u1ee5ng d\u1ecbch v\u1ee5 c\u1ee7a Vietcombank!"])), (l()(), t.rb(119, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(120, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["Thank you for banking with Vietcombank!"])), (l()(), t.rb(122, 0, null, null, 34, "div", [], null, null, null, null, null)), (l()(), t.rb(123, 0, null, null, 1, "span", [
					["class", "undeline"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["L\u01b0u \xfd"])), (l()(), t.Lb(-1, null, [": Bi\xean lai chuy\u1ec3n ti\u1ec1n n\xe0y kh\xf4ng thay cho c\xe1c cam k\u1ebft c\u1ee7a NHTMCP Ngo\u1ea1i Th\u01b0\u01a1ng Vi\u1ec7t Nam v\u1ec1 c\xe1c ngh\u0129a v\u1ee5 c\u1ee7a kh\xe1ch h\xe0ng \u0111\u01b0\u1ee3c x\xe1c nh\u1eadn v\u1edbi b\xean th\u1ee9 ba."])), (l()(), t.rb(126, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(), t.rb(127, 0, null, null, 1, "i", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["This confirmation is not Vietcombank's commitment regarding customer's obligation with third party."])), (l()(), t.rb(129, 0, null, null, 6, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o an to\xe0n b\u1ea3o m\u1eadt, b\u1ea3o v\u1ec7 quy\u1ec1n v\xe0 l\u1ee3i \xedch c\u1ee7a ch\xednh m\xecnh, khi th\u1ef1c hi\u1ec7n c\xe1c giao d\u1ecbch tr\xean c\xe1c k\xeanh ng\xe2n h\xe0ng \u0111i\u1ec7n t\u1eed c\u1ee7a Vietcombank, Qu\xfd kh\xe1ch vui l\xf2ng "])), (l()(), t.rb(131, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["\u0111\u1ecdc k\u1ef9 v\xe0 tu\xe2n theo c\xe1c th\xf4ng tin h\u01b0\u1edbng d\u1eabn giao d\u1ecbch an to\xe0n "])), (l()(), t.rb(133, 0, null, null, 1, "a", [
					["class", "link"],
					["href", "https://portal.vietcombank.com.vn/content/News/Vietcombank/PublishingImages/OldNews/15062017_huong_dan_gd_nhdt.pdf"],
					["target", "_bank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, [" t\u1ea1i \u0111\xe2y"])), (l()(), t.Lb(-1, null, ["."])), (l()(), t.rb(136, 0, null, null, 7, "p", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["M\u1ecdi th\xf4ng tin chi ti\u1ebft, truy c\u1eadp website "])), (l()(), t.rb(138, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.Lb(-1, null, [" ho\u1eb7c li\xean h\u1ec7 Trung t\xe2m h\u1ed7 tr\u1ee3 kh\xe1ch h\xe0ng 24/7 "])), (l()(), t.rb(141, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["1900 54 54 13"])), (l()(), t.Lb(-1, null, [". "])), (l()(), t.rb(144, 0, null, null, 4, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["To ensure safety and security as well as to protect your rights and benefits, when making transactions via Vietcombank e-channels, please read carefully and follow transaction instructions "])), (l()(), t.rb(146, 0, null, null, 1, "a", [
					["href", ""],
					["target", "_blank"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["here"])), (l()(), t.Lb(-1, null, [". "])), (l()(), t.rb(149, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["For further infomation, please direct your inquiries to:"])), (l()(), t.rb(151, 0, null, null, 3, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our website: "])), (l()(), t.rb(153, 0, null, null, 1, "a", [
					["href", "https://www.vietcombank.com.vn"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["www.vietcombank.com.vn"])), (l()(), t.rb(155, 0, null, null, 1, "p", [
					["class", "i"]
				], null, null, null, null, null)), (l()(), t.Lb(-1, null, ["- Our 24-hour Customer service: 1900 54 54 13"]))], null, (function(l, n) {
					var u = n.component;
					l(n, 21, 0, u.data.tranResult.transaction.createTime), l(n, 30, 0, u.data.tranResult.transaction.tranId), l(n, 39, 0, u.data.tranResult.transaction.debitAccountNo), l(n, 48, 0, u.data.tranResult.transaction.creditAccountNo), l(n, 57, 0, u.data.tranResult.transaction.providerName), l(n, 66, 0, u.data.tranResult.transaction.invoiceNo), l(n, 75, 0, u.data.tranResult.transaction.amount, u.data.tranResult.transaction.debitAccountCcy), l(n, 84, 0, "1" === u.data.tranResult.transaction.feeType ? "Ng\u01b0\u1eddi chuy\u1ec3n tr\u1ea3" : "Ng\u01b0\u1eddi nh\u1eadn tr\u1ea3"), l(n, 87, 0, "1" === u.data.tranResult.transaction.feeType ? "Exclude" : "Include"), l(n, 100, 0, u.data.authMethod.fee.exchangeTotalFeeAll), l(n, 104, 0, u.data.authMethod.fee.exchangeFeeAmount), l(n, 106, 0, u.data.authMethod.fee.exchangeFeeVat), l(n, 115, 0, u.data.tranResult.transaction.content)
				}))
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		xoc5: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("BTpN"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		"yH/L": function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {
				constructor() {}
				ngOnInit() {}
			}
		},
		ycId: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return t
			}));
			class t {}
		},
		yeVU: function(l, n, u) {
			"use strict";
			var t = u("YXz+");
			u.d(n, "a", (function() {
				return t.a
			}))
		},
		zUnb: function(l, n, u) {
			"use strict";
			u.r(n), u("yLV6");
			var t = u("8Y7J"),
				e = u("AytR"),
				r = u("j9H2");

			function a(l) {
				return new r.a(l, [{
					prefix: "./assets/i18n/app/",
					suffix: ".json"
				}, {
					prefix: "./assets/i18n/trang-chu/",
					suffix: ".json"
				}])
			}
			class i {}
			var s = u("VXAP"),
				c = u("evxF"),
				o = u("tRjT");
			class b extends s.a {
				constructor(l, n, u, t, e, r, a) {
					super(l, n), this.storeService = l, this.translate = n, this.router = u, this.authenticationService = t, this.modalService = e, this.idle = r, this.keepalive = a, this.idleState = "Not started.", this.timedOut = !1, this.lastPing = null, this.title = "angular-idle-timeout", console.log("AppComponent"), r.setIdle(1), r.setTimeout(120), r.setInterrupts(c.a), r.onIdleEnd.subscribe(() => {
						this.idleState = "No longer idle.", this.resetIdle()
					}), r.onTimeout.subscribe(() => {
						this.idleState = "Timed out!", this.timedOut = !0, console.log(this.idleState), this.logout()
					}), r.onIdleStart.subscribe(() => {
						this.idleState = "You've gone idle!"
					}), r.onTimeoutWarning.subscribe(l => {
						this.idleState = "You will time out in " + l + " seconds!"
					}), a.interval(15), a.onPing.subscribe(() => this.lastPing = new Date), this.authenticationService.currentUser.subscribe(l => {
						if (this.currentUser = l, l) {
							const n = this.storeService.getFromSession(o.a.StoreKey.SESSION_TIMEOUT);
							r.setTimeout(parseInt(n)), r.watch(), this.timedOut = !1, this.authenticationService.mySocket ? this.listen(l.user_name) : (console.log("reconnect socket if login is successfull ..."), this.authenticationService.connectSocket(), this.listen(l.user_name))
						}
					})
				}
				resetIdle() {
					this.idle.watch(), this.timedOut = !1
				}
				ngOnInit() {
					window.addEventListener("online", l => {
						console.log(l, "K\u1ebft n\u1ed1i m\u1ea1ng OK")
					}), window.addEventListener("offline", l => {
						console.log(l, "M\u1ea5t k\u1ebft n\u1ed1i m\u1ea1ng internet"), this.modalService.error(this.language.message.network_offline)
					})
				}
				listen(l) {
					console.log("listen ..."), this.authenticationService.mySocket.on("connect", (function() {
						console.log("AppComponent:socket connected:", this.id), this.emit("client_reconnect", l)
					})), this.authenticationService.mySocket.on("user_login", l => {
						const n = JSON.parse(this.storeService.getFromSession(o.a.StoreKey.USER_INFO));
						n && (console.log("user just only login: ", l, " this.f.username.value: ", n.user_name), l === n.user_name ? "1" === this.currentUser.auto_login.toString() ? (console.log("logout ..."), this.authenticationService.logout(l), this.storeService.storeInSession(o.a.StoreKey.LOGIN_STATE, "kickout"), this.router.url.startsWith("/login") ? location.reload() : this.router.navigate(["/login"])) : this.authenticationService.mySocket.emit("client_to_server", l + ",0") : location.reload())
					}), this.authenticationService.mySocket.on("user_logout", l => {
						l === this.currentUser.user_name ? (console.log("user "), "1" === this.currentUser.auto_login.toString() ? (console.log("logout ..."), this.authenticationService.logout(l), this.router.url.startsWith("/login") ? location.reload() : this.router.navigate(["/login"])) : this.authenticationService.mySocket.emit("client_to_server", l + ",0")) : location.reload()
					})
				}
				listen_login() {}
				ngOnDestroy() {
					console.log("AppComponent ngOnDestroy")
				}
				logout() {
					this.authenticationService.logout(""), this.storeService.storeInSession(o.a.StoreKey.LOGIN_STATE, "expired"), this.router.url.startsWith("/login") ? location.reload() : this.router.navigate(["/login"])
				}
			}
			var h = u("pMnS"),
				d = u("iInd");
			class g {
				constructor() {}
				ngOnInit() {}
			}
			var m = t.pb({
				encapsulation: 0,
				styles: [
					[""]
				],
				data: {}
			});

			function p(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 16, "div", [
					["id", "page-include"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 0, "div", [
					["class", "bg bg-default"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 12, "header", [
					["class", "menu"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 11, "div", [
					["class", "menu__wrap"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 2, "a", [
					["class", "menu__logo"],
					["href", "#"]
				], null, null, null, null, null)), (l()(), t.rb(5, 0, null, null, 1, "div", [
					["class", "menu__item__block no-p"]
				], null, null, null, null, null)), (l()(), t.rb(6, 0, null, null, 0, "img", [
					["alt", ""],
					["class", "menu__logo__2"],
					["src", "./assets/images/logo-white.svg"]
				], null, null, null, null, null)), (l()(), t.rb(7, 0, null, null, 2, "a", [
					["class", "menu__logo float-right"],
					["href", "#"]
				], null, null, null, null, null)), (l()(), t.rb(8, 0, null, null, 1, "div", [
					["class", "menu__item__block no-p"]
				], null, null, null, null, null)), (l()(), t.rb(9, 0, null, null, 0, "img", [
					["alt", ""],
					["class", "menu__logo__logo logo-sm"],
					["src", "./assets/images/logo-digibank-white.svg"]
				], null, null, null, null, null)), (l()(), t.rb(10, 0, null, null, 4, "div", [
					["class", "menu__mobile menu__mobile--2"]
				], null, null, null, null, null)), (l()(), t.rb(11, 0, null, null, 1, "a", [
					["class", "menu__mobile__item menu__mobile__logo menu__mobile__logo-2 text-left"],
					["href", "index.html"]
				], null, null, null, null, null)), (l()(), t.rb(12, 0, null, null, 0, "img", [
					["alt", ""],
					["class", ""],
					["src", "./assets/images/logo-white.svg"]
				], null, null, null, null, null)), (l()(), t.rb(13, 0, null, null, 1, "a", [
					["class", "menu__mobile__item menu__mobile__logo text-right"],
					["href", "index.html"]
				], null, null, null, null, null)), (l()(), t.rb(14, 0, null, null, 0, "img", [
					["alt", ""],
					["class", "logo-sm"],
					["src", "./assets/images/logo-digibank-white.svg"]
				], null, null, null, null, null)), (l()(), t.rb(15, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), t.qb(16, 212992, null, 0, d.r, [d.b, t.N, t.j, [8, null], t.h], null, null)], (function(l, n) {
					l(n, 16, 0)
				}), null)
			}

			function f(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "app-booking", [], null, null, null, p, m)), t.qb(1, 114688, null, 0, g, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var v = t.nb("app-booking", g, f, {}, {}, []),
				y = u("t68o"),
				k = u("F+o+"),
				L = u("QaKD"),
				N = u("eCIQ"),
				_ = u("qH0I"),
				w = u("ZkNS"),
				C = u("a8yd"),
				T = u("b52f"),
				S = u("Z4ou"),
				I = u("RL/f"),
				D = u("vIQc"),
				U = u("VRT4"),
				A = u("eSQ3"),
				R = u("xB5f"),
				E = u("N1s5"),
				P = u("cLPv"),
				x = u("Cvki"),
				O = u("5n0E"),
				B = u("HsMu"),
				K = u("FNYY"),
				j = u("JH0A"),
				q = u("GcN+"),
				M = u("kT/C"),
				V = u("zZFy"),
				F = u("BYsx"),
				H = u("o3Bc"),
				Y = u("CI6y"),
				J = u("36OV"),
				G = u("kcWY"),
				Q = u("xoc5"),
				$ = u("S+cY"),
				z = u("22Tf"),
				X = u("+oNn"),
				W = u("ml7P"),
				Z = u("vQc9"),
				ll = u("TwbJ"),
				nl = u("/Y2i"),
				ul = u("lt74"),
				tl = u("9OG/"),
				el = u("FUFC"),
				rl = u("rC5v"),
				al = u("Dgg3"),
				il = u("Km+h"),
				sl = u("T/8z"),
				cl = u("KaRU"),
				ol = u("lC1C"),
				bl = u("1dSC"),
				hl = u("PlA3"),
				dl = u("D5hj"),
				gl = u("guZo"),
				ml = u("SVse"),
				pl = u("YXz+"),
				fl = u("47AC"),
				vl = u("s6ns"),
				yl = t.pb({
					encapsulation: 0,
					styles: [
						[""]
					],
					data: {}
				});

			function kl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 0, "div", [
					["class", "danger-ic circle ubg-red circle-lg"]
				], null, null, null, null, null))], null, null)
			}

			function Ll(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 0, "div", [
					["class", "success-ic circle ubg-green circle-lg"]
				], null, null, null, null, null))], null, null)
			}

			function Nl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 4, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 3, "div", [
					["class", "ubtn-wrap-width-sm"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 2, "button", [
					["class", "ubtn ubtn-md ubtn-line-primary ripple no-m"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.onCloseCancel() && t), t
				}), null, null)), (l()(), t.rb(3, 0, null, null, 1, "span", [
					["class", "ubtn-text"]
				], null, null, null, null, null)), (l()(), t.Lb(4, null, ["", ""]))], null, (function(l, n) {
					l(n, 4, 0, n.component.data.btnCancel)
				}))
			}

			function _l(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 4, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 3, "div", [
					["class", "ubtn-wrap-width"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 2, "button", [
					["class", "ubtn ubtn-md ubtn-line-primary ripple no-m"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.onCloseCancel() && t), t
				}), null, null)), (l()(), t.rb(3, 0, null, null, 1, "span", [
					["class", "ubtn-text"]
				], null, null, null, null, null)), (l()(), t.Lb(4, null, ["", ""]))], null, (function(l, n) {
					l(n, 4, 0, n.component.data.btnCancel)
				}))
			}

			function wl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 4, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 3, "div", [
					["class", "ubtn-wrap-width-sm"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 2, "button", [
					["class", "ubtn ubg-primary ubtn-md ripple no-m"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.onCloseConfirm() && t), t
				}), null, null)), (l()(), t.rb(3, 0, null, null, 1, "span", [
					["class", "ubtn-text"]
				], null, null, null, null, null)), (l()(), t.Lb(4, null, ["", ""]))], null, (function(l, n) {
					l(n, 4, 0, n.component.data.btnConfirm)
				}))
			}

			function Cl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 4, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 3, "div", [
					["class", "ubtn-wrap-width"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 2, "button", [
					["class", "ubtn ubg-primary ubtn-md ripple no-m"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.onCloseConfirm() && t), t
				}), null, null)), (l()(), t.rb(3, 0, null, null, 1, "span", [
					["class", "ubtn-text"]
				], null, null, null, null, null)), (l()(), t.Lb(4, null, ["", ""]))], null, (function(l, n) {
					l(n, 4, 0, n.component.data.btnConfirm)
				}))
			}

			function Tl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 19, "div", [
					["class", "modal-dialog modal-dialog-centered modal-xs"],
					["role", "document"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 18, "div", [
					["class", "modal-content text-center"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 7, "div", [
					["class", "modal-body"]
				], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, kl)), t.qb(4, 16384, null, 0, ml.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, Ll)), t.qb(6, 16384, null, 0, ml.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.rb(7, 0, null, null, 0, "p", [
					["class", "no-m"]
				], [
					[8, "innerHTML", 1]
				], null, null, null, null)), (l()(), t.rb(8, 0, null, null, 0, "p", [
					["class", "no-m"]
				], [
					[8, "innerHTML", 1]
				], null, null, null, null)), (l()(), t.rb(9, 0, null, null, 0, "p", [
					["class", "no-m"]
				], [
					[8, "innerHTML", 1]
				], null, null, null, null)), (l()(), t.rb(10, 0, null, null, 9, "div", [
					["class", "modal-footer justify-content-center"]
				], null, null, null, null, null)), (l()(), t.rb(11, 0, null, null, 8, "div", [
					["class", "row row-15 align-items-center"]
				], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, Nl)), t.qb(13, 16384, null, 0, ml.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, _l)), t.qb(15, 16384, null, 0, ml.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, wl)), t.qb(17, 16384, null, 0, ml.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null), (l()(), t.gb(16777216, null, null, 1, null, Cl)), t.qb(19, 16384, null, 0, ml.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(l, n) {
					var u = n.component;
					l(n, 4, 0, "success" != u.data.type), l(n, 6, 0, "success" == u.data.type), l(n, 13, 0, "" !== u.data.btnCancel && "" !== u.data.btnConfirm), l(n, 15, 0, "" !== u.data.btnCancel && "" === u.data.btnConfirm), l(n, 17, 0, "" !== u.data.btnConfirm && "" !== u.data.btnCancel), l(n, 19, 0, "" !== u.data.btnConfirm && "" === u.data.btnCancel)
				}), (function(l, n) {
					var u = n.component;
					l(n, 7, 0, u.data.message1), l(n, 8, 0, u.data.message2), l(n, 9, 0, u.data.message3)
				}))
			}

			function Sl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "app-my-dialog", [], null, null, null, Tl, yl)), t.qb(1, 245760, null, 0, pl.a, [fl.a, vl.i, vl.a], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var Il = t.nb("app-my-dialog", pl.a, Sl, {}, {}, []);
			class Dl {
				constructor(l) {
					this.loaderService = l, this.isShow = !1, l.isShow.subscribe(l => {
						this.isShow = l
					})
				}
			}
			var Ul = u("giTn"),
				Al = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function Rl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 4, "div", [
					["class", "loading"]
				], null, null, null, null, null)), (l()(), t.rb(1, 0, null, null, 3, "div", [
					["class", "vs-loading__load vs-loading--default"]
				], null, null, null, null, null)), (l()(), t.rb(2, 0, null, null, 2, "div", [
					["class", "lds"]
				], null, null, null, null, null)), (l()(), t.rb(3, 0, null, null, 0, "div", [
					["class", "lds__1"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 0, "div", [
					["class", "lds__2"]
				], null, null, null, null, null))], null, null)
			}

			function El(l) {
				return t.Nb(0, [(l()(), t.gb(16777216, null, null, 1, null, Rl)), t.qb(1, 16384, null, 0, ml.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(l, n) {
					l(n, 1, 0, n.component.isShow)
				}), null)
			}
			var Pl = u("5N8a"),
				xl = u("cUpR"),
				Ol = u("o9tF"),
				Bl = u("KD2G"),
				Kl = u("TSSN"),
				jl = u("774T"),
				ql = u("lrWp"),
				Ml = u("RJTb"),
				Vl = u("NJ5i"),
				Fl = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function Hl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "iframe", [
					["frameBorder", "0"],
					["id", "vcb-survey-nps"],
					["style", "height: 70vh"],
					["width", "100%"]
				], [
					[1, "src", 5]
				], null, null, null, null)), t.Hb(1, 2)], null, (function(l, n) {
					var u = n.component,
						e = t.Mb(n, 0, 0, l(n, 1, 0, t.Db(n.parent, 0), u.npsSource, "resourceUrl"));
					l(n, 0, 0, e)
				}))
			}

			function Yl(l) {
				return t.Nb(0, [t.Fb(0, Pl.b, [xl.b]), (l()(), t.rb(1, 0, null, null, 26, "app-modal-html", [], null, null, null, Ol.b, Ol.a)), t.qb(2, 245760, null, 0, Bl.a, [], {
					id: [0, "id"],
					size: [1, "size"],
					isShowClose: [2, "isShowClose"]
				}, null), (l()(), t.rb(3, 0, null, null, 1, "div", [
					["class", "modal-header justify-content-center"]
				], null, null, null, null, null)), (l()(), t.rb(4, 0, null, null, 0, "div", [
					["class", "success-ic circle ubg-green circle-lg"]
				], null, null, null, null, null)), (l()(), t.rb(5, 0, null, 1, 2, "div", [
					["class", "modal-body justify-content-center"]
				], null, null, null, null, null)), (l()(), t.Lb(6, null, ["", ""])), t.Fb(131072, Kl.j, [Kl.k, t.h]), (l()(), t.rb(8, 0, null, 2, 19, "div", [
					["class", "modal-footer justify-content-center"]
				], null, null, null, null, null)), (l()(), t.rb(9, 0, null, null, 18, "div", [
					["class", "row row-15 align-items-center"]
				], null, null, null, null, null)), (l()(), t.rb(10, 0, null, null, 5, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(11, 0, null, null, 4, "div", [
					["class", "ubtn-wrap-width-sm"]
				], null, null, null, null, null)), (l()(), t.rb(12, 0, null, null, 3, "button", [
					["class", "ubtn ubtn-md ripple no-m ubg-primary"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.onShowSurvey() && t), t
				}), null, null)), (l()(), t.rb(13, 0, null, null, 2, "span", [
					["class", "ubtn-text"]
				], null, null, null, null, null)), (l()(), t.Lb(14, null, ["", ""])), t.Fb(131072, Kl.j, [Kl.k, t.h]), (l()(), t.rb(16, 0, null, null, 5, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(17, 0, null, null, 4, "div", [
					["class", "ubtn-wrap-width-sm"]
				], null, null, null, null, null)), (l()(), t.rb(18, 0, null, null, 3, "label", [
					["class", "ubtn ubtn-line-primary ubtn-md ripple no-m"],
					["data-dismiss", "modal"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.onRejectSurvey() && t), t
				}), null, null)), (l()(), t.rb(19, 0, null, null, 2, "span", [
					["class", "ubtn-text"]
				], null, null, null, null, null)), (l()(), t.Lb(20, null, ["", ""])), t.Fb(131072, Kl.j, [Kl.k, t.h]), (l()(), t.rb(22, 0, null, null, 5, "div", [
					["class", "inline-block"]
				], null, null, null, null, null)), (l()(), t.rb(23, 0, null, null, 4, "div", [
					["class", "ubtn-wrap-width-sm"]
				], null, null, null, null, null)), (l()(), t.rb(24, 0, null, null, 3, "label", [
					["class", "ubtn ubtn-line-primary ubtn-md ripple no-m"]
				], null, [
					[null, "click"]
				], (function(l, n, u) {
					var t = !0;
					return "click" === n && (t = !1 !== l.component.onRejectSurvey() && t), t
				}), null, null)), (l()(), t.rb(25, 0, null, null, 2, "span", [
					["class", "ubtn-text"]
				], null, null, null, null, null)), (l()(), t.Lb(26, null, ["", ""])), t.Fb(131072, Kl.j, [Kl.k, t.h]), (l()(), t.rb(28, 0, null, null, 4, "app-modal-html", [], null, null, null, Ol.b, Ol.a)), t.qb(29, 245760, null, 0, Bl.a, [], {
					id: [0, "id"],
					size: [1, "size"]
				}, null), (l()(), t.rb(30, 0, null, 1, 2, "div", [
					["class", "modal-body"]
				], null, null, null, null, null)), (l()(), t.gb(16777216, null, null, 1, null, Hl)), t.qb(32, 16384, null, 0, ml.n, [t.N, t.K], {
					ngIf: [0, "ngIf"]
				}, null)], (function(l, n) {
					var u = n.component;
					l(n, 2, 0, u.modalConfirmId, "md", !1), l(n, 29, 0, u.modalSurveyNPS, "lg"), l(n, 32, 0, u.npsSource)
				}), (function(l, n) {
					l(n, 6, 0, t.Mb(n, 6, 0, t.Db(n, 7).transform("app.survey.summary"))), l(n, 14, 0, t.Mb(n, 14, 0, t.Db(n, 15).transform("app.survey.do_now_button"))), l(n, 20, 0, t.Mb(n, 20, 0, t.Db(n, 21).transform("app.survey.do_later_button"))), l(n, 26, 0, t.Mb(n, 26, 0, t.Db(n, 27).transform("app.survey.skip_button")))
				}))
			}
			var Jl = u("pW6c"),
				Gl = u("0JRf"),
				Ql = t.pb({
					encapsulation: 0,
					styles: [
						[".tbllisting[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#006b4e;color:#fff;font-weight:700;padding:5px;border-bottom:1px solid #fff;border-left:1px solid #fff}"]
					],
					data: {}
				});

			function $l(l) {
				return t.Nb(0, [(l()(), t.rb(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), t.qb(1, 212992, null, 0, d.r, [d.b, t.N, t.j, [8, null], t.h], null, null), (l()(), t.rb(2, 0, null, null, 1, "app-loader", [], null, null, null, El, Al)), t.qb(3, 49152, null, 0, Dl, [Ul.a], null, null), (l()(), t.rb(4, 0, null, null, 1, "app-survey-nps", [], null, null, null, Yl, Fl)), t.qb(5, 49152, null, 0, jl.a, [ql.a, d.m, Ml.a, Vl.a], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}

			function zl(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "app-root", [], null, null, null, $l, Ql)), t.qb(1, 245760, null, 0, b, [fl.a, Kl.k, d.m, Jl.a, Vl.a, c.b, Gl.a], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var Xl = t.nb("app-root", b, zl, {}, {}, []),
				Wl = u("fDlF"),
				Zl = u("omvX"),
				ln = u("GS7A"),
				nn = u("IheW"),
				un = u("oyXx");
			class tn {
				constructor(l, n) {
					this.authenticationService = l, this.storeService = n
				}
				intercept(l, n) {
					const u = e.a.uploadAvatarUrl.replace("http://", "").replace("https://", "").split("/")[0];
					return this.authenticationService && this.authenticationService.currentUserValue && (l = l.url.includes(u) ? l.clone({
						setHeaders: {
							Authorization: "Basic " + e.a.token
						}
					}) : l.clone({
						setHeaders: {
							Authorization: `Bearer ${this.storeService.getFromSession(o.a.StoreKey.JWT_TOKEN)}`
						}
					})), l = l.clone({
						setHeaders: {
							"Accept-Language": un.a.getLang()
						}
					}), n.handle(l)
				}
			}
			var en = u("z6cu"),
				rn = u("JIr8");
			class an {
				constructor(l) {
					this.authenticationService = l
				}
				intercept(l, n) {
					const u = e.a.uploadAvatarUrl.replace("http://", "").replace("https://", "").split("/")[0];
					return n.handle(l).pipe(Object(rn.a)(n => {
						401 !== n.status || l.url.includes(u) || (this.authenticationService.logout(""), location.reload(!0));
						const t = n.error.message || n.statusText;
						return Object(en.a)(t)
					}))
				}
			}
			var sn = u("nYR2");
			class cn {
				constructor(l) {
					this.loaderService = l, this.totalRequests = 0
				}
				intercept(l, n) {
					return this.totalRequests++, l.url.indexOf("ping-cross-login") < 0 && this.loaderService.show(), n.handle(l).pipe(Object(sn.a)(() => {
						this.totalRequests--, 0 === this.totalRequests && this.loaderService.hide()
					}))
				}
			}
			var on = u("LRne");
			let bn = (() => {
				class l {
					constructor() {
						this.preloadedModules = []
					}
					preload(l, n) {
						return l.data && l.data.preload ? (this.preloadedModules.push(l.path), n()) : Object(on.a)(null)
					}
				}
				return l.ngInjectableDef = t.Rb({
					factory: function() {
						return new l
					},
					token: l,
					providedIn: "root"
				}), l
			})();
			var hn = u("s7LF"),
				dn = u("QQfA"),
				gn = u("IP0z"),
				mn = u("EY2u"),
				pn = u("IzEk"),
				fn = u("5+tZ");
			class vn {
				constructor(l, n) {
					this.storeService = l, this.translate = n
				}
				resolve(l, n) {
					return this.translate.getTranslation(un.a.getLang()).pipe(Object(pn.a)(1), Object(fn.a)(l => l ? Object(on.a)(l) : mn.a))
				}
			}
			var yn = u("PSoG");
			u("tkpy");
			const kn = () => u.e(73).then(u.bind(null, "L6id")).then(l => l.HomeModuleNgFactory),
				Ln = () => u.e(41).then(u.bind(null, "opbL")).then(l => l.ResetPassModuleNgFactory),
				Nn = () => u.e(35).then(u.bind(null, "f+ep")).then(l => l.LoginModuleNgFactory),
				_n = {
					labelVi: "Trang ch\u1ee7",
					labelEn: "Home"
				},
				wn = () => Promise.all([u.e(0), u.e(2), u.e(4), u.e(1), u.e(9)]).then(u.bind(null, "cOvd")).then(l => l.VcbbookingModuleNgFactory),
				Cn = {
					labelVi: "\u0110\u1eb7t l\u1ecbch h\u1eb9n v\u1edbi Vietcombank",
					labelEn: "Make an appointment with Vietcombank"
				},
				Tn = () => Promise.all([u.e(0), u.e(2), u.e(3), u.e(6), u.e(10)]).then(u.bind(null, "1ZE8")).then(l => l.NopthueModuleNgFactory),
				Sn = {
					labelVi: "N\u1ed9p thu\u1ebf",
					labelEn: "Pay taxes"
				};
			class In {}
			var Dn = u("9vUh"),
				Un = u("A3+G"),
				An = u("zMNK"),
				Rn = u("/HVE"),
				En = u("hOhj"),
				Pn = u("Xd0L"),
				xn = u("eACs"),
				On = u("UIky"),
				Bn = u("d2mR"),
				Kn = u("ycId"),
				jn = u("YD+O"),
				qn = u("ct+p"),
				Mn = t.ob(i, [b], (function(l) {
					return t.Ab([t.Bb(512, t.j, t.Z, [
						[8, [h.a, v, y.a, k.a, L.a, N.a, _.a, w.a, C.a, T.a, S.a, I.a, D.a, U.a, A.a, R.a, E.a, P.a, x.a, O.a, B.a, K.a, j.a, q.a, M.a, V.a, F.a, H.a, Y.a, J.a, G.a, Q.a, $.a, z.a, X.a, W.a, Z.a, ll.a, nl.a, ul.a, tl.a, el.a, rl.a, al.a, il.a, sl.a, cl.a, ol.a, bl.a, hl.a, dl.a, gl.a, Il, Xl]],
						[3, t.j], t.v
					]), t.Bb(5120, t.s, t.lb, [
						[3, t.s]
					]), t.Bb(4608, ml.p, ml.o, [t.s, [2, ml.y]]), t.Bb(5120, t.hb, t.mb, [t.x]), t.Bb(5120, t.c, t.ib, []), t.Bb(5120, t.q, t.jb, []), t.Bb(5120, t.r, t.kb, []), t.Bb(4608, xl.b, xl.k, [ml.d]), t.Bb(6144, t.F, null, [xl.b]), t.Bb(4608, xl.e, xl.g, []), t.Bb(5120, xl.c, (function(l, n, u, t, e, r, a, i) {
						return [new xl.i(l, n, u), new xl.n(t), new xl.m(e, r, a, i)]
					}), [ml.d, t.x, t.z, ml.d, ml.d, xl.e, t.ab, [2, xl.f]]), t.Bb(4608, xl.d, xl.d, [xl.c, t.x]), t.Bb(135680, xl.l, xl.l, [ml.d]), t.Bb(4608, xl.j, xl.j, [xl.d, xl.l, t.c]), t.Bb(5120, Wl.a, Zl.e, []), t.Bb(5120, Wl.c, Zl.f, []), t.Bb(4608, Wl.b, Zl.d, [ml.d, Wl.a, Wl.c]), t.Bb(5120, t.D, Zl.g, [xl.j, Wl.b, t.x]), t.Bb(6144, xl.o, null, [xl.l]), t.Bb(4608, t.L, t.L, [t.x]), t.Bb(4608, ln.b, Zl.c, [t.D, ml.d]), t.Bb(4608, nn.j, nn.p, [ml.d, t.z, nn.n]), t.Bb(4608, nn.q, nn.q, [nn.j, nn.o]), t.Bb(135680, fl.a, fl.a, []), t.Bb(4608, Ul.a, Ul.a, []), t.Bb(5120, nn.a, (function(l, n, u, t, e) {
						return [l, new tn(n, u), new an(t), new cn(e)]
					}), [nn.q, Jl.a, fl.a, Jl.a, Ul.a]), t.Bb(4608, nn.m, nn.m, []), t.Bb(6144, nn.k, null, [nn.m]), t.Bb(4608, nn.i, nn.i, [nn.k]), t.Bb(6144, nn.b, null, [nn.i]), t.Bb(4608, nn.f, nn.l, [nn.b, t.p]), t.Bb(4608, nn.c, nn.c, [nn.f]), t.Bb(5120, d.a, d.B, [d.m]), t.Bb(6144, d.h, null, [bn]), t.Bb(135680, d.s, d.s, [d.m, t.u, t.i, t.p, d.h]), t.Bb(4608, d.f, d.f, []), t.Bb(4608, d.g, d.g, []), t.Bb(5120, d.G, d.x, [d.m, ml.s, d.i]), t.Bb(5120, d.j, d.E, [d.C]), t.Bb(5120, t.b, (function(l) {
						return [l]
					}), [d.j]), t.Bb(4608, hn.z, hn.z, []), t.Bb(4608, hn.f, hn.f, []), t.Bb(4608, dn.a, dn.a, [dn.g, dn.c, t.j, dn.f, dn.d, t.p, t.x, ml.d, gn.b, [2, ml.i]]), t.Bb(5120, dn.h, dn.i, [dn.a]), t.Bb(5120, vl.c, vl.d, [dn.a]), t.Bb(135680, vl.e, vl.e, [dn.a, t.p, [2, ml.i],
						[2, vl.b], vl.c, [3, vl.e], dn.c
					]), t.Bb(5120, Kl.g, a, [nn.c]), t.Bb(4608, Kl.d, Kl.f, []), t.Bb(4608, Kl.i, Kl.e, []), t.Bb(4608, Kl.c, Kl.b, []), t.Bb(4608, Kl.l, Kl.l, []), t.Bb(4608, Kl.k, Kl.k, [Kl.l, Kl.g, Kl.d, Kl.i, Kl.c, Kl.m, Kl.o, Kl.n, Kl.a]), t.Bb(4608, ml.c, ml.c, [t.s]), t.Bb(4608, ml.e, ml.e, [t.s]), t.Bb(4608, c.e, c.e, []), t.Bb(4608, c.f, c.f, [c.e]), t.Bb(6144, c.c, null, [c.f]), t.Bb(135680, Gl.a, Gl.a, [nn.c, t.x]), t.Bb(6144, c.d, null, [Gl.a]), t.Bb(135680, c.b, c.b, [c.c, t.x, [2, c.d]]), t.Bb(4608, vn, vn, [fl.a, Kl.k]), t.Bb(1073742336, ml.b, ml.b, []), t.Bb(1024, t.l, xl.p, []), t.Bb(1024, t.w, (function() {
						return [d.w()]
					}), []), t.Bb(512, d.C, d.C, [t.p]), t.Bb(1024, t.d, (function(l, n) {
						return [xl.q(l), d.D(n)]
					}), [
						[2, t.w], d.C
					]), t.Bb(512, t.e, t.e, [
						[2, t.d]
					]), t.Bb(131584, t.g, t.g, [t.x, t.ab, t.p, t.l, t.j, t.e]), t.Bb(1073742336, t.f, t.f, [t.g]), t.Bb(1073742336, xl.a, xl.a, [
						[3, xl.a]
					]), t.Bb(1073742336, Zl.b, Zl.b, []), t.Bb(1073742336, nn.e, nn.e, []), t.Bb(1073742336, nn.d, nn.d, []), t.Bb(1024, d.v, d.z, [
						[3, d.m]
					]), t.Bb(512, d.u, d.c, []), t.Bb(512, d.b, d.b, []), t.Bb(256, d.i, {
						useHash: !0,
						anchorScrolling: "enabled",
						preloadingStrategy: bn
					}, []), t.Bb(1024, ml.j, d.y, [ml.r, [2, ml.a], d.i]), t.Bb(512, ml.i, ml.i, [ml.j, ml.r]), t.Bb(512, t.i, t.i, []), t.Bb(512, t.u, t.I, [t.i, [2, t.J]]), t.Bb(1024, d.k, (function() {
						return [
							[{
								path: "",
								redirectTo: "home",
								pathMatch: "full",
								canActivate: [yn.a]
							}, {
								path: "home",
								loadChildren: kn,
								canActivate: [yn.a]
							}, {
								path: "resetpassword",
								loadChildren: Ln
							}, {
								path: "login",
								loadChildren: Nn
							}, {
								path: "",
								component: g,
								data: _n,
								children: [{
									path: "booking",
									loadChildren: wn,
									data: Cn,
									pathMatch: "prefix"
								}]
							}, {
								path: "VCBSSO",
								loadChildren: Tn,
								data: Sn
							}],
							[{
								path: "",
								component: Dn.a,
								canActivate: [yn.a],
								data: Un.b,
								children: [{
									path: "info/:checksum",
									loadChildren: Un.c,
									data: Un.n
								}, {
									path: "quick-test/:checksum",
									loadChildren: Un.w,
									data: Un.x
								}, {
									path: "chuyentien",
									loadChildren: Un.y,
									data: Un.z
								}, {
									path: "thongtintaikhoan",
									loadChildren: Un.A,
									data: Un.B
								}, {
									path: "nap-tien",
									loadChildren: Un.C,
									data: Un.d
								}, {
									path: "thanhtoan",
									loadChildren: Un.e,
									data: Un.f
								}, {
									path: "tthoadon",
									redirectTo: "/home#tthoadon",
									pathMatch: "full"
								}, {
									path: "ngansach",
									loadChildren: Un.g,
									data: Un.h
								}, {
									path: "tienguitructuyen",
									loadChildren: Un.i,
									data: Un.j
								}, {
									path: "tienich",
									loadChildren: Un.k,
									data: Un.l
								}, {
									path: "cong-cu-tinh-toan",
									loadChildren: Un.m,
									data: Un.o
								}, {
									path: "tindung",
									loadChildren: Un.p,
									data: Un.q
								}, {
									path: "caidat",
									loadChildren: Un.r,
									data: Un.s
								}, {
									path: "uu-dai",
									loadChildren: Un.t,
									data: Un.u
								}]
							}, {
								path: ":checksum",
								component: Dn.a,
								canActivate: [yn.a],
								data: Un.v
							}]
						]
					}), []), t.Bb(1024, d.m, d.A, [t.g, d.u, d.b, ml.i, t.p, t.u, t.i, d.k, d.i, [2, d.t],
						[2, d.l]
					]), t.Bb(1073742336, d.q, d.q, [
						[2, d.v],
						[2, d.m]
					]), t.Bb(1073742336, In, In, []), t.Bb(1073742336, hn.y, hn.y, []), t.Bb(1073742336, hn.i, hn.i, []), t.Bb(1073742336, hn.u, hn.u, []), t.Bb(1073742336, gn.a, gn.a, []), t.Bb(1073742336, An.f, An.f, []), t.Bb(1073742336, Rn.b, Rn.b, []), t.Bb(1073742336, En.b, En.b, []), t.Bb(1073742336, dn.e, dn.e, []), t.Bb(1073742336, Pn.b, Pn.b, [
						[2, Pn.a],
						[2, xl.f]
					]), t.Bb(1073742336, vl.h, vl.h, []), t.Bb(1073742336, xn.b, xn.b, []), t.Bb(1073742336, Pl.a, Pl.a, []), t.Bb(1073742336, Kl.h, Kl.h, []), t.Bb(1073742336, On.a, On.a, []), t.Bb(1073742336, Bn.a, Bn.a, []), t.Bb(1073742336, Un.a, Un.a, []), t.Bb(1073742336, Kn.a, Kn.a, []), t.Bb(1073742336, jn.b, jn.b, []), t.Bb(1073742336, qn.a, qn.a, []), t.Bb(1073742336, c.g, c.g, []), t.Bb(1073742336, Gl.b, Gl.b, []), t.Bb(1073742336, i, i, []), t.Bb(256, t.Y, !0, []), t.Bb(256, Zl.a, "BrowserAnimations", []), t.Bb(256, nn.n, "XSRF-TOKEN", []), t.Bb(256, nn.o, "X-XSRF-TOKEN", []), t.Bb(256, Kl.o, !0, []), t.Bb(256, Kl.m, void 0, []), t.Bb(256, Kl.n, void 0, []), t.Bb(256, Kl.a, void 0, [])])
				}));
			e.a.production && (Object(t.R)(), window && (window.console.log = () => {})), xl.h().bootstrapModuleFactory(Mn).catch(l => console.error(l))
		},
		zZFy: function(l, n, u) {
			"use strict";
			u.d(n, "a", (function() {
				return s
			}));
			var t = u("8Y7J"),
				e = u("brVl"),
				r = t.pb({
					encapsulation: 2,
					styles: [],
					data: {}
				});

			function a(l) {
				return t.Nb(0, [], null, null)
			}

			function i(l) {
				return t.Nb(0, [(l()(), t.rb(0, 0, null, null, 1, "ng-component", [], null, null, null, a, r)), t.qb(1, 114688, null, 0, e.a, [], null, null)], (function(l, n) {
					l(n, 1, 0)
				}), null)
			}
			var s = t.nb("ng-component", e.a, i, {
				data: "data"
			}, {}, [])
		},
		zn8P: function(l, n) {
			function u(l) {
				return Promise.resolve().then((function() {
					var n = new Error("Cannot find module '" + l + "'");
					throw n.code = "MODULE_NOT_FOUND", n
				}))
			}
			u.keys = function() {
				return []
			}, u.resolve = u, l.exports = u, u.id = "zn8P"
		}
	},
	[
		[0, 5, 15]
	]
]);
