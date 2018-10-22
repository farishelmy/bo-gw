module.exports= {
    containerInit:function(recObj, userParam){
        const containerConf={
            record_id: null,
            record_type_id: "rect-b420bec15d7d46a6a3706f8d4a15e3cb",
            parent_id: null,
            classification_id: null,
            thesaurus_id: null,
            stakeholder_id: null,
            title: recObj.title,
            is_final: false,
            is_check_out: false,
            user_defined_field: null,
            record_no: null,
            bio_access_id: userParam.bio_access_id,
            action: userParam.action,
            acl_entries: null,
            record_metadata: [{
                section_id: "sect-860d5e5361f04c14a8175e8b704cce82",
                section_field: [{
                    custom_field_id: "record_no",
                    value: null
                }, {
                    custom_field_id: "title",
                    value: recObj.title
                }]
            }]
        }
        return containerConf
    },
    fullAddress:function(recObj, userParam){
        const fullAddConf={
            record_id: null,
            record_type_id: "rect-05b06223cd10437c8ca2dfd1e0010e33",
            parent_id: recObj.parent_id,
            classification_id: null,
            thesaurus_id: null,
            stakeholder_id: null,
            title: recObj.title,
            is_final: false,
            is_check_out: false,
            user_defined_field: null,
            record_no: null,
            bio_access_id: userParam.bio_access_id,
            action: userParam.action,
            acl_entries: null,
            record_metadata: [{
                section_id: "sect-80e3f148beee43e69e485d3455bb62c0",
                section_field: [{
                    custom_field_id: "record_no",
                    value: null
                }, {
                    custom_field_id: "parent_id",
                    value: recObj.parent_id
                }, {
                    custom_field_id: "title",
                    value: recObj.title
                }, {
                    custom_field_id: "cfld-5305a8a292674a89842a0fe04176f006",
                    value: recObj.no
                }, {
                    custom_field_id: "cfld-77e8faa292774f24a6e62e5d35917ade",
                    value: recObj.bangunan
                }, {
                    custom_field_id: "cfld-eefd7ad6918943eb9c21c32dd9ed15b7",
                    value: recObj.jalan
                }, {
                    custom_field_id: "cfld-6d34da6ddd2c4e4fa45616846bfcaf42",
                    value: recObj.taman
                }, {
                    custom_field_id: "cfld-bef12fe14ef549e1a1f5f84477e8ca88",
                    value: recObj.bandar
                }, {
                    custom_field_id: "cfld-c06f337e5d6e49c2ac1bfb68e3f58a16",
                    value: recObj.poskod
                }, {
                    custom_field_id: "cfld-2f18be9fba044cd1a0816b49b0e22b17",
                    value: recObj.negeri
                }, {
                    custom_field_id: "cfld-5873b9d377034346b01f478d195b097b",
                    value: recObj.no_telefon
                }]
            }]
        }
        return fullAddConf
    },
    ir:function(recObj, userParam){
        const recConf={
            record_id: null,
            record_type_id: "rect-44d34443ce7c48bfbf07cbdf34a97f1c",
            parent_id: recObj.parent_id,
            classification_id: null,
            thesaurus_id: null,
            stakeholder_id: null,
            title: recObj.title,
            is_final: false,
            is_check_out: false,
            user_defined_field: null,
            record_no: null,
            bio_access_id: userParam.bio_access_id,
            action: userParam.action,
            acl_entries: null,
            record_metadata: [{
                section_id: "sect-9129c8dd8ad04fdc8732e357a33dab3c",
                section_field: [{
                    custom_field_id: "record_no",
                    value: null
                }, {
                    custom_field_id: "parent_id",
                    value: recObj.parent_id
                }, {
                    custom_field_id: "title",
                    value: recObj.title
                }, {
                    custom_field_id: "cfld-ad537631a60249509c393f773585ef7b",
                    value: recObj.senarai_nama
                }, {
                    custom_field_id : "cfld-eb33d8d09dc548d2ae5ac514ffd51104",
                    value: recObj.kereta
                },{
                    custom_field_id : "cfld-149c832b7acf4f598b92b6285c43484b",
                    value: recObj.motorsikal
                },{
                    custom_field_id : "cfld-67080e0c822647c0a2343c7ac15ed0b8",
                    value: recObj.basikal
                }, {
                    custom_field_id : "cfld-66723f3c0f964882815f32ae5cc2c805",
                    value : recObj.peralatan_lain
                }
            ]
            }]
        }
        return recConf
    },
    tk:function(recObj, userParam){
        const recConf={
            record_id: null,
            record_type_id: "rect-20b19fa6a59146679d47071f63042e18",
            parent_id: recObj.parent_id,
            classification_id: null,
            thesaurus_id: null,
            stakeholder_id: null,
            title: recObj.title,
            is_final: false,
            is_check_out: false,
            user_defined_field: null,
            record_no: null,
            bio_access_id: userParam.bio_access_id,
            action: userParam.action,
            acl_entries: null,
            record_metadata: [{
                section_id: "sect-873ba71d0cd14f1dae3f942ba7e79823",
                section_field: [{
                    custom_field_id: "record_no",
                    value: null
                }, {
                    custom_field_id: "parent_id",
                    value: recObj.parent_id
                }, {
                    custom_field_id: "title",
                    value: recObj.title
                }, {
                    custom_field_id: "cfld-638dce7b16b3488b8cc7df95c466056f",
                    value: recObj.tempat_kediaman
                }, {
                    custom_field_id : "cfld-4f906acc160044099e03f7fa5dba7b73",
                    value: recObj.tempat_kediaman_lain2
                },{
                    custom_field_id : "cfld-d9af0593f20f46988060f622636dbb8f",
                    value: recObj.tidak_bermaksud
                },{
                    custom_field_id : "cfld-80b36d3da09b4d0aae8125d69818e881",
                    value: recObj.tidak_bermaksud_lain2
                }, {
                    custom_field_id : "cfld-06d0bcfc7ca4416cb7b3bbdc7de1612a",
                    value : recObj.bilangan_tingkat
                },{
                    custom_field_id: "cfld-0dc74ae9d20b42bdb89c0febeae10b86",
                    value: recObj.jumlah_tingkat
                }, {
                    custom_field_id: "cfld-afd18fe48f9542a7b93a0d9e482184e7",
                    value: recObj.bahan_binaan
                }, {
                    custom_field_id: "cfld-d973e016cca440d7ae6d935ef11ba025",
                    value: recObj.bahan_binaan_lain2
                }, {
                    custom_field_id: "cfld-28d3290fb2104386b8beb77c79a80368",
                    value: recObj.didiami
                }, {
                    custom_field_id: "cfld-6690fb116fe8404aa5899d01a9cea3bc",
                    value: recObj.didiami_lain2
                }, {
                    custom_field_id: "cfld-5ef70ad914dc45ac83c84ae5ee59966d",
                    value: recObj.bilik
                }, {
                    custom_field_id: "cfld-f9243d07ec754cceb998ed7b8a389128",
                    value: recObj.bilik_tidur
                }, {
                    custom_field_id: "cfld-42023d846eca4fa69cd58b3f5cc767e1",
                    value: recObj.status_pemilikan
                }, {
                    custom_field_id: "cfld-8d9e97542eaa4ad6a11de509774b9437",
                    value: recObj.status_pemilikan_lain2
                }, {
                    custom_field_id: "cfld-47a52fa7e2b34b53bdfb62d7cf665a4e",
                    value: recObj.air_minuman
                }, {
                    custom_field_id: "cfld-686825634a5849c8b531e6d3cdf34a7d",
                    value: recObj.air_minuman_lain2
                }, {
                    custom_field_id: "cfld-d2cdf14cab1e41b0bc906427f3b7bf54",
                    value: recObj.bekalan_elektrik_dibekalkan
                }, {
                    custom_field_id: "cfld-378b7905d8b5493db11b219915474cce",
                    value: recObj.bekalan_elektrik_xdibekalkan
                }, {
                    custom_field_id: "cfld-d21536dbaa8e4158bc402e5507de5721",
                    value: recObj.tandas
                }, {
                    custom_field_id: "cfld-798e2ff44f1141a1b4c9d277300a261e",
                    value: recObj.kutipan_sampah
                }
            ]
            }]
        }
        return recConf
    },
    officeUsed:function(recObj, userParam){
        const recConf={
            record_id: null,
            record_type_id: "rect-1230e072f69340df956eb1c990f582b7",
            parent_id: recObj.parent_id,
            classification_id: null,
            thesaurus_id: null,
            stakeholder_id: null,
            title: recObj.title,
            is_final: false,
            is_check_out: false,
            user_defined_field: null,
            record_no: null,
            bio_access_id: userParam.bio_access_id,
            action: userParam.action,
            acl_entries: null,
            record_metadata: [{
                section_id: "sect-154d1522f71b492391437c0f9197dd04",
                section_field: [{
                    custom_field_id: "record_no",
                    value: null
                }, {
                    custom_field_id: "parent_id",
                    value:recObj.parent_id,
                }, {
                    custom_field_id: "title",
                    value: recObj.title
                }, {
                    custom_field_id: "cfld-f1f48e3bd1ee44eab9c115ec39de4967",
                    value: recObj.kod_negeri
                }, {
                    custom_field_id: "cfld-fd6f626fc73f4fb482acb9cd7c22c77c",
                    value: recObj.DP
                }, {
                    custom_field_id: "cfld-2937494c71234b769fd8cf8456b80bf6",
                    value: recObj.DB
                }, {
                    custom_field_id: "cfld-0d3d467c1a22413daa514c3e60e6ced5",
                    value: recObj.LB
                }, {
                    custom_field_id: "cfld-ec415e8ca3f94f1fbfa969749c8ce770",
                    value: recObj.BP
                }, {
                    custom_field_id: "cfld-f619fabbb0b44e69bc5c413e7067e5c2",
                    value: recObj.lokaliti
                }, {
                    custom_field_id: "cfld-048e273dd9ad450ca6a5e1dfea162248",
                    value: recObj.TK
                }]
                },{
                section_id: "sect-b355dc454b674bb893cc073f51d85614",
                section_field: [{
                    custom_field_id: "cfld-2ed54a27c79640de8e75dd489c28fbc9",
                    value: recObj.interview
                }, {
                    custom_field_id: "cfld-3e42a2d788d14f8195a266c9bddc8df7",
                    value: recObj.self
                }],
                },{
                section_id: "sect-de325a9c804e40119894ff0830f06cf2",
                section_field: [{
                    custom_field_id: "cfld-02a9c86fcdfa4c4bae48751fd7c76f3f",
                    value: recObj.bil_ir
                }, {
                    custom_field_id: "cfld-ef487ae7913d43e79c0a36022c20ef42",
                    value: recObj.jumlah
                }, {
                    custom_field_id: "cfld-c5fbbc94de264509a2c38029a687bd55",
                    value: recObj.no_ir
                }, {
                    custom_field_id: "cfld-8c0bf430b79646969638a0203a4bc98e",
                    value: recObj.male
                }, {
                    custom_field_id: "cfld-44c5c972c6c149e292c5be6498c35491",
                    value: recObj.female
                }, {
                    custom_field_id: "cfld-22d2f5c1eb394c26a417bb5f70548b89",
                    value: recObj.total
                }]
                }]
        }
        return recConf
    }

}