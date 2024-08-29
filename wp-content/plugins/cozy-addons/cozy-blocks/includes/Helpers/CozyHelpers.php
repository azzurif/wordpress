<?php

namespace CozyBlock\Helpers;

class CozyHelpers {
	public static function asset_file_values( $path ) {
		$asset_path = $path;

		return file_exists( $asset_path )
			? include $asset_path
			: array(
				'dependencies' => array(),
				'version'      => $version ?? COZY_ADDONS_VERSION,
			);
	}
}
