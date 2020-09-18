# Install required plugins
required_plugins = ["vagrant-hostsupdater"]
required_plugins.each do |plugin|
    exec "vagrant plugin install #{plugin}" unless Vagrant.has_plugin? plugin
end

Vagrant.configure("2") do |config|
    config.vm.box = "centos/8"
    config.vm.network "private_network", ip: "192.168.10.100"
    config.hostsupdater.aliases = ["development.local"]
    config.vm.provision "shell", path: "app/provision.sh"
    config.vm.provider "virtualbox" do |v|
      v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
      v.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
        v.customize ["modifyvm", :id, "--audio", "none"]
    end
  end
